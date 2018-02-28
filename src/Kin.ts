import { isNull, isNullOrUndefined } from 'util';
import { Chromatic, Dots } from './enums';
import Oracle from './Oracle';
import { Sign } from './Sign';
import { Tone } from './Tone';

export class Kin {
  public static Create(sign: Sign, tone: Tone): Kin {
    if (isNullOrUndefined(sign)) {
      throw new Error('sign is null or underfined');
    }

    if (isNullOrUndefined(tone)) {
      throw new Error('tone is null or underfined');
    }

    let i = tone.Normilize().Number;
    while (!sign.Is(new Kin(i).Sign)) {
      i += 13;
    }

    return new Kin(i);
  }

  public readonly Index: number;
  public readonly Sign: Sign;
  public readonly Tone: Tone;

  public readonly WaveSpell: Sign;
  public readonly Chromatic: Chromatic;

  constructor(index: number | Kin) {
    if (index instanceof Kin) {
      index = index.Index;
    }
    index = index % 260;

    if (index === 0) {
      index = 260;
    }

    this.Index = index;
    this.Tone = new Tone(this.Index % 13);
    this.Sign = new Sign(this.Index % 20);

    this.WaveSpell = this.getWaveSpell();
    this.Chromatic = this.getChromatic();
  }

  public Oracle(): Oracle {
    return new Oracle(this);
  }

  // public Power(): number {
  //   return 1;
  // }

  // public SummaryKin(): Kin {
  //   return new Kin(0);
  // }

  public Is(kin2: Kin): boolean {
    return kin2.Index === this.Index;
  }

  private getChromatic(): Chromatic {
    let ind = this.Index % 4;
    ind = ind === 0 ? 4 : ind;
    return ind as Chromatic;
  }

  private getWaveSpell(): Sign {
    return new Sign(
      (this.Sign.Number - (this.Tone.Normilize().Number - 1) + 2 * 20) % 20
    );
  }
}

export function kin(num: number) {
  return new Kin(num);
}

export default kin;
