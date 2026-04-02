from __future__ import annotations

from io import BytesIO
from pathlib import Path
from typing import Tuple

from PIL import Image

ROOT = Path("D:/work/evaao/REPO/Guru-Ma-App/public/images")
MAX_BYTES = 1_000_000
RASTER_EXTS = {".jpg", ".jpeg", ".png", ".webp"}


def image_bytes(img: Image.Image, ext: str, quality: int) -> bytes:
    buf = BytesIO()
    if ext in {".jpg", ".jpeg"}:
        out = img.convert("RGB")
        out.save(buf, format="JPEG", quality=quality, optimize=True, progressive=True)
    elif ext == ".png":
        # PNG compression with adaptive palette for better size.
        if img.mode not in {"P", "L"}:
            out = img.convert("P", palette=Image.Palette.ADAPTIVE, colors=256)
        else:
            out = img
        out.save(buf, format="PNG", optimize=True, compress_level=9)
    elif ext == ".webp":
        out = img
        out.save(buf, format="WEBP", quality=quality, method=6)
    else:
        raise ValueError(f"Unsupported extension: {ext}")
    return buf.getvalue()


def compress_under_limit(path: Path, max_bytes: int) -> Tuple[bool, int, int]:
    before = path.stat().st_size
    ext = path.suffix.lower()

    with Image.open(path) as src:
        src.load()
        working = src.copy()

    # Try quality sweep first.
    best_data = None
    for quality in [92, 86, 80, 74, 68, 62, 56, 50, 44]:
        data = image_bytes(working, ext, quality)
        if len(data) <= max_bytes:
            best_data = data
            break
        if best_data is None or len(data) < len(best_data):
            best_data = data

    # If still too large, downscale progressively and retry.
    if best_data is None or len(best_data) > max_bytes:
        base = working
        width, height = base.size
        for scale in [0.9, 0.8, 0.7, 0.6, 0.5, 0.4]:
            new_w = max(320, int(width * scale))
            new_h = max(320, int(height * scale))
            resized = base.resize((new_w, new_h), Image.Resampling.LANCZOS)
            for quality in [86, 78, 70, 62, 54, 46, 38]:
                data = image_bytes(resized, ext, quality)
                if len(data) <= max_bytes:
                    best_data = data
                    break
                if best_data is None or len(data) < len(best_data):
                    best_data = data
            if best_data is not None and len(best_data) <= max_bytes:
                break

    if best_data is None:
        return False, before, before

    path.write_bytes(best_data)
    after = len(best_data)
    return after <= max_bytes, before, after


def main() -> None:
    files = [p for p in ROOT.rglob("*") if p.is_file() and p.suffix.lower() in RASTER_EXTS]
    big_files = [p for p in files if p.stat().st_size > MAX_BYTES]

    print(f"raster_files={len(files)}")
    print(f"over_1mb_before={len(big_files)}")

    ok = 0
    failed = 0
    for p in big_files:
        success, before, after = compress_under_limit(p, MAX_BYTES)
        if success:
            ok += 1
        else:
            failed += 1
        print(f"{p} | {before} -> {after} | success={success}")

    over_after = sum(1 for p in files if p.stat().st_size > MAX_BYTES)
    print(f"compressed_success={ok}")
    print(f"compressed_failed={failed}")
    print(f"over_1mb_after={over_after}")


if __name__ == "__main__":
    main()
