"""Vineet Trakroo issue plates: semantic photos, coverart, backcover collage."""
import os
import random

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "public", "issues", "vineet")
PW, PH = 1000, 1414
INK = (6, 46, 48)
TEAL = (13, 115, 119)


def open_rgb(name):
    return Image.open(os.path.join(SRC, name)).convert("RGB")


def cover_fit(im, w, h, pos=("center", "center")):
    scale = max(w / im.width, h / im.height)
    nw, nh = int(im.width * scale), int(im.height * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    if pos[0] == "right":
        x = nw - w
    elif pos[0] == "left":
        x = 0
    else:
        x = (nw - w) // 2
    if pos[1] == "top":
        y = 0
    elif pos[1] == "bottom":
        y = nh - h
    else:
        y = (nh - h) // 2
    return im.crop((x, y, x + w, y + h))


def save_jpg(im, name, quality=90):
    path = os.path.join(SRC, name)
    im.convert("RGB").save(path, "JPEG", quality=quality)
    print("saved:", path, im.size)


def copy_semantic():
    mapping = {
        "extract_p8_i16.jpg": "balcony.jpg",
        "extract_p8_i15.jpg": "arms.jpg",
        "extract_p7_i7.jpg": "window.jpg",
        "extract_p7_i8.jpg": "desk.jpg",
        "extract_p7_i9.jpg": "chair.jpg",
        "extract_p7_i11.jpg": "office.jpg",
        "extract_p8_i12.jpg": "lobby.jpg",
        "extract_p8_i13.jpg": "vest.jpg",
        "extract_p9_i17.jpg": "brick.jpg",
        "extract_p11_i21.jpg": "feature.jpg",
        "extract_p10_i20.jpg": "awards.jpg",
        "extract_p1_i1.jpg": "sunset.jpg",
        "extract_p1_i0.jpg": "logo-esa.jpg",
    }
    for src, dest in mapping.items():
        im = open_rgb(src)
        save_jpg(im, dest, quality=92)


def make_cover():
    """Vertical cover source: lobby portrait, subject already on the right."""
    save_jpg(cover_fit(open_rgb("extract_p8_i12.jpg"), PW, PH, ("right", "top")), "cover.jpg")


def make_coverart():
    """Lobby portrait: subject stays right; left column is a quiet teal field."""
    photo = open_rgb("extract_p8_i12.jpg")
    # Bias the crop right so glass/doors become the type column.
    bg = cover_fit(photo, PW, PH, ("right", "top"))

    # Soft dusk grade — keep the face readable, cool the stone.
    bg = ImageEnhance.Color(bg).enhance(0.82)
    bg = ImageEnhance.Contrast(bg).enhance(1.06)
    wash = Image.new("RGB", (PW, PH), INK)
    bg = Image.blend(bg, wash, 0.18)

    # Left column veil: type lives here. Stops before the face (~x 420).
    veil = Image.new("L", (PW, PH), 0)
    vd = ImageDraw.Draw(veil)
    col = 400
    for x in range(col):
        t = 1 - (x / col)
        vd.line([(x, 0), (x, PH)], fill=int(200 * (t**1.15)))
    bg.paste(Image.new("RGB", (PW, PH), INK), (0, 0), veil)

    # Top-left pocket for the PrimeCrest mark.
    top = Image.new("L", (PW, 220), 0)
    td = ImageDraw.Draw(top)
    for y in range(220):
        td.line([(0, y), (460, y)], fill=int(90 * (1 - y / 220)))
    bg.paste(Image.new("RGB", (PW, 220), INK), (0, 0), top)

    # Barcode lift.
    grad = Image.new("L", (1, 240))
    for y in range(240):
        grad.putpixel((0, y), int(90 * (y / 240)))
    bg.paste(Image.new("RGB", (PW, 240), (4, 28, 30)), (0, PH - 240), grad.resize((PW, 240)))

    save_jpg(bg, "coverart.jpg", quality=91)


def make_backcover():
    names = ["balcony.jpg", "desk.jpg", "office.jpg", "lobby.jpg", "vest.jpg", "chair.jpg"]
    tiles = [open_rgb(n) for n in names]
    big = int((PW**2 + PH**2) ** 0.5) + 420
    collage = Image.new("RGB", (big, big), INK)
    tile_w, tile_h, gap = 250, 340, 12
    rng = random.Random(26)
    cols = big // (tile_w + gap) + 2
    rows = big // (tile_h + gap) + 2
    for r in range(rows):
        for c in range(cols):
            t = tiles[(r * cols + c + rng.randrange(3)) % len(tiles)]
            th = tile_h
            tw = int(t.width * (th / t.height))
            t = t.resize((tw, th), Image.LANCZOS)
            left = max(0, (tw - tile_w) // 2)
            t = t.crop((left, 0, min(left + tile_w, tw), th))
            if t.width < tile_w:
                pad = Image.new("RGB", (tile_w, th), INK)
                pad.paste(t, ((tile_w - t.width) // 2, 0))
                t = pad
            x = c * (tile_w + gap) - (tile_w // 2 if r % 2 else 0)
            collage.paste(t, (x, r * (tile_h + gap)))

    collage = collage.rotate(7, resample=Image.BICUBIC, expand=False)
    cx, cy = collage.width // 2, collage.height // 2
    page = collage.crop((cx - PW // 2, cy - PH // 2, cx + PW // 2, cy + PH // 2))
    wash = Image.new("RGB", (PW, PH), INK)
    page = Image.blend(page, wash, 0.74)

    edge = Image.new("L", (PW, PH), 120)
    de = ImageDraw.Draw(edge)
    de.ellipse((PW * -0.22, PH * -0.16, PW * 1.22, PH * 1.16), fill=0)
    page = Image.composite(Image.new("RGB", (PW, PH), (3, 20, 22)), page, edge)
    save_jpg(page, "backcover.jpg", quality=88)


if __name__ == "__main__":
    copy_semantic()
    make_cover()
    make_coverart()
    make_backcover()
