

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

  public readonly number: number;
  public readonly name: string;

  public constructor(num: number | Sign = 1) {
    if (num instanceof Sign) {
      num = num.number;
    }
    num = num % 20;
    if (num === 0) {
      num = 20;
    }
    this.number = num;
    this.name = this.getName();
  }

  public toString(): string {
    return this.name;
  }

  public normilize(): number {
    return this.number === 0 ? 20 : this.number;
  }

  public eq(sign2: Sign): boolean {
    return sign2.number === this.number;
  }

  private getName(): string {
    switch (this.number) {
      case 1:
        return 'RedDragon';
      case 2:
        return 'WhiteWind';
      case 3:
        return 'BlueNight';
      case 4:
        return 'YellowSeed';

      case 5:
        return 'RedSerpent';
      case 6:
        return 'WhiteWorldBridger';
      case 7:
        return 'BlueHand';
      case 8:
        return 'YellowStar';

      case 9:
        return 'RedMoon';
      case 10:
        return 'WhiteDog';
      case 11:
        return 'BlueMonkey';
      case 12:
        return 'YellowHuman';

      case 13:
        return 'RedSkyWalker';
      case 14:
        return 'WhiteWizard';
      case 15:
        return 'BlueEagle';
      case 16:
        return 'YellowWarrior';

      case 17:
        return 'RedEarth';
      case 18:
        return 'WhiteMirror';
      case 19:
        return 'BlueStorm';
      case 20:
        return 'YellowSun';
    }

    return 'Unknown';
  }
}

export function sign(num: number) {
  return new Sign(num);
}

export default sign;
