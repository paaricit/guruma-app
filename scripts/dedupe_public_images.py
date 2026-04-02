"""Remove byte-identical duplicates under public/images, keeping one canonical file each.

Canonical preference:
1. Any path still referenced in *.ts, *.tsx, *.css (excluding node_modules)
2. Else dedicated-spiritual-speaker-program
3. Else public/images/home
4. Else lexicographically smallest path
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_IMAGES = ROOT / "public" / "images"
RASTER = {".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"}


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def collect_referenced_paths() -> set[str]:
    """Paths relative to repo root, posix: public/images/..."""
    pattern = re.compile(r'''["']/images/([^"']+)["']''')
    refs: set[str] = set()
    for glob in ("**/*.ts", "**/*.tsx", "**/*.css"):
        for f in ROOT.glob(glob):
            if "node_modules" in f.parts:
                continue
            try:
                text = f.read_text(encoding="utf-8")
            except OSError:
                continue
            for m in pattern.finditer(text):
                refs.add(f"public/images/{m.group(1)}")
    return refs


def score(rel_posix: str, refs: set[str]) -> tuple[int, int, str]:
    """Lower tuple sorts earlier. When multiple paths are referenced, prefer /public/images/home/."""
    s = rel_posix.lower()
    if rel_posix in refs:
        home_prio = 0 if "/home/" in s else 1
        return (0, home_prio, rel_posix)
    if "dedicated-spiritual-speaker-program" in s:
        return (1, 0, rel_posix)
    if "/home/" in s:
        return (2, 0, rel_posix)
    return (3, 0, rel_posix)


def main() -> None:
    refs = collect_referenced_paths()

    paths = [p for p in PUBLIC_IMAGES.rglob("*") if p.is_file() and p.suffix.lower() in RASTER]
    by_hash: dict[str, list[Path]] = {}
    for p in paths:
        h = sha256_file(p)
        by_hash.setdefault(h, []).append(p)

    deleted = 0
    kept_dup_groups = 0
    for h, group in by_hash.items():
        if len(group) < 2:
            continue
        rels_list = [(p, p.resolve().relative_to(ROOT).as_posix()) for p in group]
        referenced_pairs = [(p, rel) for p, rel in rels_list if rel in refs]
        if referenced_pairs:
            canonical = min(
                referenced_pairs,
                key=lambda pr: score(pr[1], refs),
            )[0]
        else:
            canonical = min(group, key=lambda x: score(x.resolve().relative_to(ROOT).as_posix(), refs))

        carel = canonical.resolve().relative_to(ROOT).as_posix()
        for p, rel in rels_list:
            if p == canonical:
                kept_dup_groups += 1
                continue
            if rel in refs:
                print(f"SKIP (also referenced): {rel}")
                continue
            p.unlink()
            deleted += 1
            print(f"DEL {rel}  (same as {carel})")

    print(f"Done. Removed {deleted} duplicate files ({kept_dup_groups} canonical kept in multi-file groups).")


if __name__ == "__main__":
    main()
