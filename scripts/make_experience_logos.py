"""Gera versões compactas dos logos usados nos cards de Experiência.

Remove o fundo branco, recorta a área útil e, quando indicado, mantém só a
marca principal (ex.: "tcs" sem o texto "Tata Consultancy Services"), para que
o logo seja legível na altura de uma linha de texto.

Uso: python scripts/make_experience_logos.py
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from PIL import Image

ASSETS_DIR = Path(__file__).resolve().parent.parent / "assets"
OUTPUT_DIR = ASSETS_DIR / "experience"
OUTPUT_HEIGHT = 96
WHITE_START = 225
WHITE_END = 250


@dataclass(frozen=True)
class LogoSpec:
    source: str
    output: str
    crop_ratio: tuple[float, float] = (0.0, 1.0)


LOGOS: tuple[LogoSpec, ...] = (
    LogoSpec("quali-it.png", "quali-it.png"),
    LogoSpec("ons.png", "ons.png", crop_ratio=(0.0, 0.47)),
    LogoSpec("tcs.png", "tcs.png", crop_ratio=(0.0, 0.47)),
    LogoSpec("infosys.png", "infosys.png"),
)


def remove_white_background(image: Image.Image) -> Image.Image:
    """Converte pixels quase brancos em transparência com transição suave."""
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    ramp = WHITE_END - WHITE_START
    for y in range(height):
        for x in range(width):
            red, green, blue, alpha = pixels[x, y]
            lightness = min(red, green, blue)
            if lightness <= WHITE_START:
                continue
            factor = max(0.0, (WHITE_END - lightness) / ramp)
            pixels[x, y] = (red, green, blue, int(alpha * factor))
    return rgba


def build_logo(spec: LogoSpec) -> Path:
    source_path = ASSETS_DIR / spec.source
    if not source_path.exists():
        raise FileNotFoundError(f"Logo de origem não encontrado: {source_path}")

    image = remove_white_background(Image.open(source_path))
    start, end = spec.crop_ratio
    image = image.crop((int(image.width * start), 0, int(image.width * end), image.height))

    bbox = image.getchannel("A").getbbox()
    if bbox is None:
        raise ValueError(f"Logo sem pixels visíveis após remover o fundo: {spec.source}")
    image = image.crop(bbox)

    target_height = min(OUTPUT_HEIGHT, image.height)
    if target_height != image.height:
        width = round(image.width * target_height / image.height)
        image = image.resize((width, target_height), Image.Resampling.LANCZOS)

    output_path = OUTPUT_DIR / spec.output
    image.save(output_path, format="PNG", optimize=True)
    return output_path


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for spec in LOGOS:
        path = build_logo(spec)
        with Image.open(path) as result:
            print(f"{path.name}: {result.width}x{result.height}")


if __name__ == "__main__":
    main()
