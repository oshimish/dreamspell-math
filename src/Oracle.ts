import { Chromatic, Dots } from '../src/enums';
import { Kin } from './Kin';
import { Sign } from './Sign';

export default class Oracle {
  public readonly Kin: Kin;

  public readonly Analog: Kin;
  public readonly Driver: Kin;
  public readonly Antipod: Kin;
  public readonly Occult: Kin;

  constructor(kin: Kin) {
    this.Kin = kin;

    this.Analog = this.getAnalog();
    this.Driver = this.getDriver();
    this.Antipod = this.getAntipod();
    this.Occult = this.getOccult();
  }

  private getAnalog(): Kin {
    return Kin.Create(
      new Sign((19 - this.Kin.Sign.Normilize().Number + 2 * 20) % 20),
      this.Kin.Tone
    );
  }

  private getDriver(): Kin {
    let sign = this.Kin.Sign.Normilize().Number;

    switch (this.Kin.Tone.Notation()) {
      case Dots.Line:
        sign += 8;
        break;
      case Dots.OneDot:
        // nothing
        break;
      case Dots.TwoDots:
        sign -= 8;
        break;
      case Dots.ThreeDots:
        sign += 4;
        break;
      case Dots.FourDots:
        sign -= 4;
        break;
    }

    sign = (sign + 2 * 20) % 20;

    return Kin.Create(new Sign(sign), this.Kin.Tone);
  }

  private getAntipod(): Kin {
    return new Kin(260 / 2 + this.Kin.Index);
  }

  private getOccult(): Kin {
    return new Kin(1 - this.Kin.Index + 2 * 260);
  }
}
