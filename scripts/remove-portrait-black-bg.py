"""
Edge flood-fill: remove near-black pixels connected to image border (black mat background).
Output: RGBA PNG. Requires: pip install pillow numpy
"""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

try:
    import numpy as np
    from PIL import Image
except ImportError:
    print("Install dependencies: pip install pillow numpy", file=sys.stderr)
    sys.exit(1)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "public" / "images" / "About Her Page Photos" / "about-her-hero-portrait.png"

    if not src.exists():
        print(f"Missing: {src}", file=sys.stderr)
        sys.exit(1)

    # max(R,G,B) <= thresh => candidate background (tune if fringe remains or hair vanishes)
    thresh = 40

    img = Image.open(src).convert("RGBA")
    w, h = img.size
    arr = np.array(img)
    rgb = arr[:, :, :3].astype(np.int16)
    mx = np.max(rgb, axis=2)

    bg = mx <= thresh
    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            if bg[y, x]:
                visited[y, x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if bg[y, x] and not visited[y, x]:
                visited[y, x] = True
                q.append((x, y))

    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if nx < 0 or nx >= w or ny < 0 or ny >= h:
                continue
            if visited[ny, nx] or not bg[ny, nx]:
                continue
            visited[ny, nx] = True
            q.append((nx, ny))

    out = arr.copy()
    out[:, :, 3] = np.where(visited, 0, out[:, :, 3])

    Image.fromarray(out, "RGBA").save(src, format="PNG", optimize=True)
    print(f"Updated transparent PNG: {src} ({w}x{h}), thresh={thresh}")


if __name__ == "__main__":
    main()
