enum Chromatic {
  Red = 1,
  White = 2,
  Blue = 3,
  Yellow = 4,
}

enum Sign {
  RedDragon = 1,
  WhiteWind = 2,
  BlueNight = 3,
  YellowSeed = 4,

  RedSerpent = 5,
  WhiteWorldBridger = 6,
  BlueHand = 7,
  YellowStar = 8,

  RedMoon = 9,
  WhiteDog = 10,
  BlueMonkey = 11,
  YellowHuman = 12,

  RedSkyWalker = 13,
  WhiteWizard = 14,
  BlueEagle = 15,
  YellowWarrior = 16,

  RedEarth = 17,
  WhiteMirror = 18,
  BlueStorm = 19,
  YellowSun = 0,
}

// tslint:disable-next-line:no-internal-module
// tslint:disable-next-line:no-namespace
namespace Sign {
  export function toString(sign: Sign) {
    return Sign[sign];
  }

  // export function parse(sign: string) {
  //   return Sign[sign];
  // }

  export function Up(sign: Sign): number {
    return sign === 0 ? 20 : sign;
  }
}

enum GNotation {
  Line = 0,
  OneDot = 1,
  TwoDots = 2,
  ThreeDots = 3,
  FourDots = 4,
}
