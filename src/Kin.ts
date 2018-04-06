import { isNull, isNullOrUndefined } from 'util';
import { Colors, Dots } from './enums';
import Oracle from './Oracle';
import { Sign } from './Sign';
import { Tone } from './Tone';

export const PORTALS_MATRIX: number[]  = [
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
  public static create(sign: Sign, tone: Tone): Kin {
    if (isNullOrUndefined(sign)) {
      throw new Error('sign is null or underfined');
    }

    if (isNullOrUndefined(tone)) {
      throw new Error('tone is null or underfined');
    }

    let i = tone.normilize();
    while (!sign.eq(new Kin(i).sign)) {
      i += 13;
    }

    return new Kin(i);
  }

  public readonly number: number;
  public readonly name: string;
  public readonly sign: Sign;
  public readonly tone: Tone;
  public readonly isGalacticPortal: boolean;
  public readonly isMysticColumn: boolean;
  public readonly zolkinRow: number;
  public readonly zolkinColumn: number;


  public readonly waveSpell: Sign;
  public readonly color: Colors;

  constructor(index: number | Kin) {
    if (index instanceof Kin) {
      index = index.number;
    }
    index = index % 260;

    if (index === 0) {
      index = 260;
    }

    this.number = index;
    this.tone = new Tone(this.number % 13);
    this.sign = new Sign(this.number % 20);

    this.waveSpell = this.getWaveSpell();
    this.color = this.getColor();

    let row = (index % 20);
    if(row === 0) {row = 20};
    let col = Math.trunc(index / 20) ;
    if(row !== 20) {col++};

    this.zolkinRow = row;
    this.zolkinColumn = col;

    const matrixIndex = Math.trunc((col-1) + (row-1)*13);

    this.isGalacticPortal = PORTALS_MATRIX[matrixIndex] === 1;
    this.isMysticColumn = PORTALS_MATRIX[matrixIndex] === 2;

    this.name = this.getName();
  }

  public getOracle(): Oracle {
    return new Oracle(this);
  }

  // public Power(): number {
  //   return 1;
  // }

  // public SummaryKin(): Kin {
  //   return new Kin(0);
  // }

  public eq(kin2: Kin): boolean {
    return kin2.number === this.number;
  }

  public toString(): string {
    return this.name;
  }

  private getName(): string {
    return `${this.tone} ${this.sign}`;
  }

  private getColor(): Colors {
    let ind = this.number % 4;
    ind = ind === 0 ? 4 : ind;
    return ind as Colors;
  }

  private getWaveSpell(): Sign {
    return new Sign(
      (this.sign.number - (this.tone.normilize() - 1) + 2 * 20) % 20
    );
  }
}

export function kin(num: number) {
  return new Kin(num);
}

export default kin;
