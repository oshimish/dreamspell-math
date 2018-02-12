import Tone from './Tone';

export default class Kin {
  public static Create(sign: Sign, tone: Tone): Kin {
    if (sign < 0) {
      throw new Error('sign');
    }

    let i = tone.Up().Number;
    while (new Kin(i).Sign() !== sign) {
      i += 13;
    }

    return new Kin(i);
  }

  public Index: number;

  constructor(index: number) {
    this.Index = index;
  }

  public Tone(): Tone {
    return new Tone(this.Index % 13);
  }

  public Sign(): Sign {
    return this.Index % 20;
  }

  public Chromatic(): Chromatic {
    let ind = this.Index % 4;
    ind = ind === 0 ? 4 : ind;
    return ind;
  }

  public WaveSpell(): Sign {
    return (this.Sign() - (this.Tone().Up().Number - 1) + 2 * 20) % 20;
  }

  public Power(): number {
    return 1;
  }

  public SummaryKin(): Kin {
    return new Kin(0);
  }

  public Analog(): Kin {
    return Kin.Create((19 - Sign.Up(this.Sign()) + 2 * 20) % 20, this.Tone());
  }

  public Driver(): Kin {
    let sign = Sign.Up(this.Sign());

    switch (this.Tone().Notation()) {
      case GNotation.Line:
        sign += 8;
        break;
      case GNotation.OneDot:
        // nothing
        break;
      case GNotation.TwoDots:
        sign -= 8;
        break;
      case GNotation.ThreeDots:
        sign += 4;
        break;
      case GNotation.FourDots:
        sign -= 4;
        break;
    }

    sign = (sign + 2 * 20) % 20;

    return Kin.Create(sign, this.Tone());
  }

  public Antipod(): Kin {
    return new Kin(260 / 2 + this.Index);
  }

  public Occult(): Kin {
    return new Kin(1 - this.Index + 2 * 260);
  }
}
