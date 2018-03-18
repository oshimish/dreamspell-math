import { isNull, isNullOrUndefined } from 'util';
import { Chromatic, Dots } from './enums';
import Oracle from './Oracle';
import { Sign } from './Sign';
import { Tone } from './Tone';

export const PortalsMatrix: number[]  = [
  1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, // 1
  0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0,
  0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0,
  0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, // 7
  0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 1, 2, 1, 0, 1, 0, 0, 0,
  0, 0, 1, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0,
  0, 0, 1, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0,
  0, 0, 0, 1, 0, 1, 2, 1, 0, 1, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, // 13
  0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0,
  0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0,
  1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, // 20
];

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
  public readonly IsGalacticPortal: boolean;
  public readonly IsMysticColumn: boolean;
  public readonly ZolkinRow: number;
  public readonly ZolkinColumn: number;


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

    let zeroIndex = index;
    // if (zeroIndex === 260) {
    //   zeroIndex = 0;
    // }
    let row = (zeroIndex % 20);
    if(row === 0) {row = 20};
    let col = Math.trunc(zeroIndex / 20) ;
    if(row !== 20) {col++};

    this.ZolkinRow = row;
    this.ZolkinColumn = col;

    const matrixIndex = Math.trunc((col-1) + (row-1)*13);

    this.IsGalacticPortal = PortalsMatrix[matrixIndex] === 1;
    this.IsMysticColumn = PortalsMatrix[matrixIndex] === 2;
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
