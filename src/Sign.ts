export class Sign {
  public static readonly RedDragon: Sign = new Sign(1);
  public static readonly WhiteWind: Sign = new Sign(2);
  public static readonly BlueNight: Sign = new Sign(3);
  public static readonly YellowSeed: Sign = new Sign(4);

  public static readonly RedSerpent: Sign = new Sign(5);
  public static readonly WhiteWorldBridger: Sign = new Sign(6);
  public static readonly BlueHand: Sign = new Sign(7);
  public static readonly YellowStar: Sign = new Sign(8);

  public static readonly RedMoon: Sign = new Sign(9);
  public static readonly WhiteDog: Sign = new Sign(10);
  public static readonly BlueMonkey: Sign = new Sign(11);
  public static readonly YellowHuman: Sign = new Sign(12);

  public static readonly RedSkyWalker: Sign = new Sign(13);
  public static readonly WhiteWizard: Sign = new Sign(14);
  public static readonly BlueEagle: Sign = new Sign(15);
  public static readonly YellowWarrior: Sign = new Sign(16);

  public static readonly RedEarth: Sign = new Sign(17);
  public static readonly WhiteMirror: Sign = new Sign(18);
  public static readonly BlueStorm: Sign = new Sign(19);
  public static readonly YellowSun: Sign = new Sign(0);

  public readonly Number: number;

  public constructor(num: number = 1) {
    num = num % 20;
    if (num === 0) {
      num = 20;
    }
    this.Number = num;
  }

  public toString(): string {
    const keys = Object.keys(this);
    const val = Object.keys(Sign).filter(
      key => ((Sign as any)[key] as Sign).Number === this.Number
    );

    return val.length >= 1 ? val[0] : 'Unknown';
  }

  public Normilize(): Sign {
    return new Sign(this.Number === 0 ? 20 : this.Number);
  }

  public Is(sign2: Sign): boolean {
    return sign2.Number === this.Number;
  }
}

export function sign(num: number) {
  return new Sign(num);
}

export default sign;
