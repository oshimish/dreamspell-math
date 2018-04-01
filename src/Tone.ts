import { Dots } from './enums';

export class Tone {
  public static readonly Magnetic: Tone = new Tone(1);
  public static readonly Lunar: Tone = new Tone(2);
  public static readonly Electric: Tone = new Tone(3);
  public static readonly SelfExisting: Tone = new Tone(4);
  public static readonly Overtone: Tone = new Tone(5);
  public static readonly Rhythmic: Tone = new Tone(6);
  public static readonly Resonant: Tone = new Tone(7);
  public static readonly Galactic: Tone = new Tone(8);
  public static readonly Solar: Tone = new Tone(9);
  public static readonly Planetary: Tone = new Tone(10);
  public static readonly Spectral: Tone = new Tone(11);
  public static readonly Crystal: Tone = new Tone(12);
  public static readonly Cosmic: Tone = new Tone(13);

  public readonly number: number;
  public readonly name: string;

  public constructor(num: number | Tone = 1) {
    if (num instanceof Tone) {
      num = num.number;
    }
    num = num % 13;
    if (num === 0) {
      num = 13;
    }
    this.number = num;
    this.name = this.toString();
  }

  public toString(): string {
    switch (this.number) {
      case 1:
        return 'Magnetic';
      case 2:
        return 'Lunar';
      case 3:
        return 'Electric';
      case 4:
        return 'Self-Existing';
      case 5:
        return 'Overtone';
      case 6:
        return 'Rhythmic';
      case 7:
        return 'Resonant';
      case 8:
        return 'Galactic';
      case 9:
        return 'Solar';
      case 10:
        return 'Planetary';
      case 11:
        return 'Spectral';
      case 12:
        return 'Crystal';
      case 13:
        return 'Cosmic';
    }

    return 'Unknown';
  }

  public normilize(): number {
    return this.number === 0 ? 13 : this.number;
  }

  public eq(other: Tone): boolean {
    return this.number === other.number;
  }

  public dots(): Dots {
    const dots = this.number % 5;
    switch (dots) {
      case 1:
        return Dots.OneDot;
      case 2:
        return Dots.TwoDots;
      case 3:
        return Dots.ThreeDots;
      case 4:
        return Dots.FourDots;
      case 0:
        return Dots.Line;

      default:
        break;
    }
    throw new Error();
  }
}

export function tone(num: number) {
  return new Tone(num);
}

export default tone;
