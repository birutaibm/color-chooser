function between0and1(n: number): number {
  if (n < 0)  return between0and1(1 + n);
  if (n > 1) return between0and1(n - 1);
  return n;
}

function considerSL(rel1: number, rel2: number, hueBased: number) {
  if (6 * hueBased < 1) return rel2 + (rel1 - rel2) * 6 * hueBased;
  if (2 * hueBased < 1) return rel1;
  if (3 * hueBased < 2) return rel2 + (rel1 - rel2) * 6 * (0.666 - hueBased);
  return rel2;
}

function hexa(decimal: number): string {
  const hexa = decimal.toString(16);
  switch (hexa.length) {
    case 0:
      return '00';
    case 1:
      return '0' + hexa;
    default:
      return hexa;
  }
}

export default class Color {
  constructor(
    public readonly red: number,
    public readonly green: number,
    public readonly blue: number,
    public readonly hue: number,
    public readonly saturation: number,
    public readonly lightness: number,
  ) {}

  public static fromHSL(hue: number, saturation: number, lightness = 50): Color {
    if (saturation === 0) {
      const tone = 255 / lightness;
      return new Color(tone, tone, tone, hue, saturation, lightness);
    } else {
      const h = hue / 360;
      const s = saturation / 100;
      const l = lightness / 100;
      const aux1 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const aux2 = 2 * l - aux1;
      const red = Math.round(255 * considerSL(aux1, aux2, between0and1(h + 0.333)));
      const green = Math.round(255 * considerSL(aux1, aux2, h));
      const blue = Math.round(255 * considerSL(aux1, aux2, between0and1(h - 0.333)));
      return new Color(red, green, blue, hue, saturation, lightness);
    }
  }

  public static fromRGB(red: number, green: number, blue: number): Color {
    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const lightness = Math.round(100 * (min + max) / 2);
    if (min === max) new Color(red, green, blue, 0, 0, lightness);

    const amplitude = max - min;
    const saturation = lightness < 50
      ? Math.round(100 * amplitude / (max + min))
      : Math.round(100 * amplitude / (2 - amplitude));
    let hue = (g - b) / amplitude;
    if (g === max) hue = 2 + (b - r) / amplitude;
    else if (b === max) hue = 4 + (r - g) / amplitude;
    hue *= 60;
    if (hue < 0) hue += 360;
    hue = Math.round(hue);
    return new Color(red, green, blue, hue, saturation, lightness);
  }

  public static fromHexa(hexa: string): Color {
    if (hexa.length === 4) {
      return this.fromRGB(
        Number.parseInt(hexa.charAt(1) + hexa.charAt(1), 16),
        Number.parseInt(hexa.charAt(2) + hexa.charAt(2), 16),
        Number.parseInt(hexa.charAt(3) + hexa.charAt(3), 16),
      );
    }
    return this.fromRGB(
      Number.parseInt(hexa.substr(1, 2), 16),
      Number.parseInt(hexa.substr(3, 2), 16),
      Number.parseInt(hexa.substr(5, 2), 16),
    );
  }

  public toHexa() {
    return '#' + hexa(this.red) + hexa(this.green) + hexa(this.blue);
  }
}