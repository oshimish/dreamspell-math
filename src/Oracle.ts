import { Dots } from './enums';
import { Kin } from './Kin';
import { Sign } from './Sign';

export default class Oracle {
  public readonly kin: Kin;

  public readonly analog: Kin;
  public readonly driver: Kin;
  public readonly antipod: Kin;
  public readonly occult: Kin;

  constructor(kin: Kin) {
    this.kin = kin;

    this.analog = this.getAnalog();
    this.driver = this.getDriver();
    this.antipod = this.getAntipod();
    this.occult = this.getOccult();
  }

  private getAnalog(): Kin {
    return Kin.create(
      new Sign((19 - this.kin.sign.normilize() + 2 * 20) % 20),
      this.kin.tone
    );
  }

  private getDriver(): Kin {
    let sign = this.kin.sign.normilize();

    switch (this.kin.tone.dots()) {
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

    return Kin.create(new Sign(sign), this.kin.tone);
  }

  private getAntipod(): Kin {
    return new Kin(260 / 2 + this.kin.number);
  }

  private getOccult(): Kin {
    return new Kin(1 - this.kin.number + 2 * 260);
  }
}
