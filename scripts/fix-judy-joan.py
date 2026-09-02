"""Judy: real portraits from the source PDF. Joan: cover that keeps her face, no slab."""
import os
import random

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PW, PH = 1000, 1414


def fit_cover(photo_path, out_path, *, pos=(0.62, 0.12)):
    """Full-bleed portrait. Face stays whole — no slab over the head."""
    full_page(photo_path, out_path, pos=pos)


def full_page(src, out, *, pos=(0.55, 0.22)):
    photo = Image.open(src).convert("RGB")
    scale = max(PW / photo.width, PH / photo.height)
    im = photo.resize((int(photo.width * scale), int(photo.height * scale)), Image.LANCZOS)
    x = int((im.width - PW) * pos[0])
    y = int((im.height - PH) * pos[1])
    x = max(0, min(x, im.width - PW))
    y = max(0, min(y, im.height - PH))
    im.crop((x, y, x + PW, y + PH)).save(out, "JPEG", quality=90)
    print("page", out)


def collage(paths, out):
    tiles = [Image.open(p).convert("RGB") for p in paths]
    big = int((PW**2 + PH**2) ** 0.5) + 400
    collage = Image.new("RGB", (big, big), (18, 17, 16))
    tw, th, gap = 260, 340, 12
    rng = random.Random(9)
    cols = big // (tw + gap) + 2
    rows = big // (th + gap) + 2
    for r in range(rows):
        for c in range(cols):
            t = tiles[(r * cols + c + rng.randrange(len(tiles))) % len(tiles)]
            ts = t.resize((int(t.width * (th / t.height)), th), Image.LANCZOS)
            left = max(0, (ts.width - tw) // 2)
            ts = ts.crop((left, 0, left + tw, th))
            x = c * (tw + gap) - (tw // 2 if r % 2 else 0)
            collage.paste(ts, (x, r * (th + gap)))
    collage = collage.rotate(8, resample=Image.BICUBIC, expand=False)
    cx, cy = collage.width // 2, collage.height // 2
    page = collage.crop((cx - PW // 2, cy - PH // 2, cx + PW // 2, cy + PH // 2))
    wash = Image.new("RGB", (PW, PH), (18, 17, 16))
    page = Image.blend(page, wash, 0.76)
    page.save(out, "JPEG", quality=88)
    print("back", out)


def judy():
    src = os.path.join(ROOT, "public", "issues", "judy")
    a = os.path.join(src, "_extract", "p1_0.png")
    b = os.path.join(src, "_extract", "p1_1.png")
    Image.open(a).convert("RGB").save(os.path.join(src, "cover.jpg"), "JPEG", quality=92)
    Image.open(b).convert("RGB").save(os.path.join(src, "portrait.jpg"), "JPEG", quality=92)
    fit_cover(a, os.path.join(src, "coverart.jpg"), pos=(0.78, 0.18))
    full_page(a, os.path.join(src, "blue.jpg"), pos=(0.72, 0.2))
    full_page(b, os.path.join(src, "scarf.jpg"), pos=(0.5, 0.15))
    # tighter face crop for a third bleed
    face = Image.open(b).convert("RGB")
    w, h = face.size
    crop = face.crop((int(w * 0.22), int(h * 0.02), int(w * 0.88), int(h * 0.98)))
    full_page_im = crop
    # save as gaze via resize-cover
    tmp = os.path.join(src, "_gaze_src.jpg")
    crop.save(tmp, "JPEG", quality=92)
    full_page(tmp, os.path.join(src, "gaze.jpg"), pos=(0.45, 0.1))
    os.remove(tmp)
    collage(
        [os.path.join(src, "cover.jpg"), os.path.join(src, "portrait.jpg"), os.path.join(src, "blue.jpg")],
        os.path.join(src, "backcover.jpg"),
    )


def joan():
    src = os.path.join(ROOT, "public", "issues", "joan")
    # Pink-jacket studio portrait — keep the whole face on the right.
    fit_cover(os.path.join(src, "portrait.jpg"), os.path.join(src, "coverart.jpg"), pos=(0.55, 0.08))
    Image.open(os.path.join(src, "portrait.jpg")).convert("RGB").save(
        os.path.join(src, "cover.jpg"), "JPEG", quality=92
    )
    collage(
        [
            os.path.join(src, "portrait.jpg"),
            os.path.join(src, "portrait-studio.jpg"),
            os.path.join(src, "conference.jpg"),
            os.path.join(src, "nasdaq.jpg"),
        ],
        os.path.join(src, "backcover.jpg"),
    )


if __name__ == "__main__":
    judy()
    joan()
