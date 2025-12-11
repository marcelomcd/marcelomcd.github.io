from PIL import Image, ImageOps
import os

src = r"assets/profile.jpg"
out1 = r"assets/profile.opt.jpg"
out2 = r"assets/profile.webp"

if not os.path.exists(src):
    print("Source not found:", src)
    raise SystemExit(1)

img = Image.open(src)
# center crop to square
w,h = img.size
minside = min(w,h)
left = (w-minside)//2
top = (h-minside)//2
# Choose resampling constant compatible across Pillow versions
try:
    resample = Image.Resampling.LANCZOS
except AttributeError:
    resample = Image.LANCZOS

img2 = img.crop((left,top,left+minside,top+minside)).resize((800,800), resample)

# ensure RGB for JPEG
if img2.mode in ("RGBA","LA"):
    # use a typed variable to satisfy static checkers that expect an int
    from typing import Any
    bg_color: Any = (255,255,255)
    background = Image.new("RGB", img2.size, bg_color)
    background.paste(img2, mask=img2.split()[3])
    img_jpeg = background
else:
    img_jpeg = img2.convert("RGB")

img_jpeg.save(out1, format='JPEG', quality=85, optimize=True)
img2.save(out2, format='WEBP', quality=80, method=6)

print('Saved', out1, os.path.getsize(out1), 'bytes')
print('Saved', out2, os.path.getsize(out2), 'bytes')
