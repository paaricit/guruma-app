"""Delete raster/SVG files under public/images that are never referenced in project source."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "public" / "images"
IMG_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".ico"}
SOURCE_SUFFIXES = {".ts", ".tsx", ".css", ".js", ".jsx", ".mjs", ".json"}

# Match /images/... in quotes (filenames may contain spaces)
REF_PATTERN = re.compile(r'''["']/images/([^"']+)["']''')


def should_skip_dir(parts: tuple[str, ...]) -> bool:
    if "node_modules" in parts or ".next" in parts or "dist" in parts:
        return True
    return False


def is_under_images(path: Path) -> bool:
    try:
        path.resolve().relative_to(IMG.resolve())
    except ValueError:
        return False
    return True


def collect_referenced_subpaths() -> set[str]:
    """Paths relative to public/images/, posix (e.g. home/foo.png)."""
    refs: set[str] = set()
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        if should_skip_dir(path.parts):
            continue
        if is_under_images(path):
            continue
        if path.suffix.lower() not in SOURCE_SUFFIXES:
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for m in REF_PATTERN.finditer(text):
            refs.add(m.group(1).replace("\\", "/"))
    return refs


def empty_dirs_bottom_up(base: Path) -> None:
    """Remove empty directories under base (after file deletes)."""
    # Walk deepest first
    dirs = sorted({p for p in base.rglob("*") if p.is_dir()}, key=lambda p: len(p.parts), reverse=True)
    for d in dirs:
        try:
            next(d.iterdir())
        except StopIteration:
            try:
                d.rmdir()
            except OSError:
                pass


def main() -> int:
    dry = "--dry-run" in sys.argv
    refs = collect_referenced_subpaths()

    to_delete: list[Path] = []
    for p in sorted(IMG.rglob("*")):
        if not p.is_file() or p.suffix.lower() not in IMG_EXTS:
            continue
        try:
            rel = p.relative_to(IMG).as_posix()
        except ValueError:
            continue
        if rel not in refs:
            to_delete.append(p)

    total_bytes = sum(p.stat().st_size for p in to_delete)
    print(f"Referenced image paths: {len(refs)}")
    print(f"Files to delete: {len(to_delete)} ({total_bytes / 1024 / 1024:.2f} MiB)")
    if dry:
        for p in to_delete[:80]:
            print("  would delete", p.relative_to(ROOT).as_posix())
        if len(to_delete) > 80:
            print(f"  ... and {len(to_delete) - 80} more")
        return 0

    for p in to_delete:
        p.unlink()
        print("DEL", p.relative_to(ROOT).as_posix())
    empty_dirs_bottom_up(IMG)
    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
