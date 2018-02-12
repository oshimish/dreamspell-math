import './enums';

export default class Tone {
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

  public Number: number;

  public constructor(num: number = 0) {
    num = num % 13;
    if (num === 0) {
      num = 13;
    }
    this.Number = num;
  }

  public toString(): string {
    switch (this.Number) {
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

  public Up(): Tone {
    return new Tone(this.Number === 0 ? 13 : this.Number);
  }

  public Notation(): GNotation {
    if (
      this === Tone.Magnetic ||
      this === Tone.Rhythmic ||
      this === Tone.Spectral
    ) {
      return GNotation.OneDot;
    }
    if (
      this === Tone.Lunar ||
      this === Tone.Resonant ||
      this === Tone.Crystal
    ) {
      return GNotation.TwoDots;
    }
    if (
      this === Tone.Electric ||
      this === Tone.Galactic ||
      this === Tone.Cosmic
    ) {
      return GNotation.ThreeDots;
    }
    if (this === Tone.SelfExisting || this === Tone.Solar) {
      return GNotation.FourDots;
    }
    if (this === Tone.Overtone || this === Tone.Planetary) {
      return GNotation.Line;
    }
    throw new Error();
  }
}
