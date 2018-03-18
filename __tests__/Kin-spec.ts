import { Chromatic } from '../src/enums';
import { Kin, PortalsMatrix } from '../src/Kin';
import { Sign } from '../src/Sign';
import { Tone } from '../src/Tone';

test('Should get a correct signs and tones for the specific kins', () => {
  const kin81 = new Kin(81);
  expect(kin81.Sign).toEqual(Sign.RedDragon);
  expect(kin81.Tone).toEqual(Tone.Electric);
  expect(kin81.Chromatic).toEqual(Chromatic.Red);

  const kin1 = new Kin(1);
  expect(kin1.Sign).toEqual(Sign.RedDragon);
  expect(kin1.Tone).toEqual(Tone.Magnetic);
  expect(kin1.Chromatic).toEqual(Chromatic.Red);

  const kin260 = new Kin(260);
  const kin0 = new Kin(0);
  expect(kin260.Sign).toEqual(kin0.Sign);
  expect(kin260.Tone).toEqual(kin0.Tone);
  expect(kin260.Sign).toEqual(Sign.YellowSun);
  expect(kin260.Tone).toEqual(Tone.Cosmic);
  expect(kin260.Chromatic).toEqual(Chromatic.Yellow);

  const tone = new Tone(1);
  expect(tone.Number).toEqual(1);
});

test('Should get a correct wavespells for the specific kins', () => {
  expect(Sign.RedDragon).toEqual(new Kin(1).WaveSpell);
  expect(Sign.BlueStorm).toEqual(new Kin(81).WaveSpell);
  expect(Sign.WhiteMirror).toEqual(new Kin(130).WaveSpell);
  expect(Sign.BlueMonkey).toEqual(new Kin(131).WaveSpell);
  expect(Sign.YellowStar).toEqual(new Kin(260).WaveSpell);
});

test('Should get a correct analogs for the specific kins', () => {
  expect(new Kin(118)).toEqual(new Kin(1).Oracle().Analog);
  expect(new Kin(1)).toEqual(new Kin(118).Oracle().Analog);

  expect(new Kin(198)).toEqual(new Kin(81).Oracle().Analog);
  expect(new Kin(81)).toEqual(new Kin(198).Oracle().Analog);

  expect(new Kin(169)).toEqual(new Kin(130).Oracle().Analog);
  expect(new Kin(130)).toEqual(new Kin(169).Oracle().Analog);
});

test('Should get a correct drivers for the specific kins', () => {
  expect(Kin.Create(Sign.RedDragon, Tone.Magnetic)).toEqual(
    Kin.Create(Sign.RedDragon, Tone.Magnetic).Oracle().Driver
  );
  expect(Kin.Create(Sign.RedSerpent, Tone.Electric)).toEqual(
    Kin.Create(Sign.RedDragon, Tone.Electric).Oracle().Driver
  );

  expect(Kin.Create(Sign.YellowHuman, Tone.Lunar)).toEqual(
    Kin.Create(Sign.YellowSun, Tone.Lunar).Oracle().Driver
  );
  expect(Kin.Create(Sign.YellowSeed, Tone.Cosmic)).toEqual(
    Kin.Create(Sign.YellowSun, Tone.Cosmic).Oracle().Driver
  );

  expect(Kin.Create(Sign.BlueHand, Tone.Overtone)).toEqual(
    Kin.Create(Sign.BlueStorm, Tone.Overtone).Oracle().Driver
  );
  expect(Kin.Create(Sign.BlueEagle, Tone.SelfExisting)).toEqual(
    Kin.Create(Sign.BlueStorm, Tone.SelfExisting).Oracle().Driver
  );
});

test('Should get a correct antipods for the specific kins', () => {
  expect(new Kin(131)).toEqual(new Kin(1).Oracle().Antipod);
  expect(new Kin(1)).toEqual(new Kin(131).Oracle().Antipod);

  expect(new Kin(211)).toEqual(new Kin(81).Oracle().Antipod);
  expect(new Kin(81)).toEqual(new Kin(211).Oracle().Antipod);

  expect(new Kin(260)).toEqual(new Kin(130).Oracle().Antipod);
  expect(new Kin(130)).toEqual(new Kin(260).Oracle().Antipod);
});

test('Should get a correct occults for the specific kins', () => {
  expect(new Kin(260)).toEqual(new Kin(1).Oracle().Occult);
  expect(new Kin(1)).toEqual(new Kin(260).Oracle().Occult);

  expect(new Kin(180)).toEqual(new Kin(81).Oracle().Occult);
  expect(new Kin(81)).toEqual(new Kin(180).Oracle().Occult);

  expect(new Kin(131)).toEqual(new Kin(130).Oracle().Occult);
  expect(new Kin(130)).toEqual(new Kin(131).Oracle().Occult);
});

test('Should get a correct chromatics for the specific kins', () => {
  expect(new Kin(1).Chromatic).toEqual(Chromatic.Red);
  expect(new Kin(2).Chromatic).toEqual(Chromatic.White);
  expect(new Kin(3).Chromatic).toEqual(Chromatic.Blue);
  expect(new Kin(4).Chromatic).toEqual(Chromatic.Yellow);
  expect(new Kin(5).Chromatic).toEqual(Chromatic.Red);

  expect(new Kin(257).Chromatic).toEqual(Chromatic.Red);
  expect(new Kin(258).Chromatic).toEqual(Chromatic.White);
  expect(new Kin(259).Chromatic).toEqual(Chromatic.Blue);
  expect(new Kin(260).Chromatic).toEqual(Chromatic.Yellow);

  expect(new Kin(0).Chromatic).toEqual(Chromatic.Yellow);
});

test('Should get a correct kins when creating from sign and tone', () => {
  expect(new Kin(1)).toEqual(Kin.Create(Sign.RedDragon, Tone.Magnetic));
  expect(new Kin(81)).toEqual(Kin.Create(Sign.RedDragon, Tone.Electric));
  expect(new Kin(130)).toEqual(Kin.Create(Sign.WhiteDog, Tone.Cosmic));
  expect(new Kin(131)).toEqual(Kin.Create(Sign.BlueMonkey, Tone.Magnetic));
  expect(new Kin(260)).toEqual(Kin.Create(Sign.YellowSun, Tone.Cosmic));
});

test('Should get a correct galactic portals', () => {
  expect(new Kin(1).IsGalacticPortal).toEqual(true);
  expect(new Kin(2).IsGalacticPortal).toEqual(false);
  expect(new Kin(39).IsGalacticPortal).toEqual(true);
  expect(new Kin(40).IsGalacticPortal).toEqual(false);
  expect(new Kin(211).IsGalacticPortal).toEqual(true);
  expect(new Kin(259).IsGalacticPortal).toEqual(false);
  expect(new Kin(260).IsGalacticPortal).toEqual(true);
});

test('Should get a correct ccentral rows', () => {

  // for (let index = 1; index <= 260; index++) {
  //   const element = new Kin(index);
  //   console.log(element.Index + "[r" + element.ZolkinRow + ', c'
  //   + element.ZolkinColumn + ']'  + ' (mi: '+ matrixIndex +') = m:'
  //   + element.IsMysticColumn + ' g:' + element.IsGalacticPortal)

  // }

  expect(new Kin(1).IsMysticColumn).toEqual(false);
  expect(new Kin(120).IsMysticColumn).toEqual(false);
  expect(new Kin(121).IsMysticColumn).toEqual(true);
  expect(new Kin(131).IsMysticColumn).toEqual(true);
  expect(new Kin(139).IsMysticColumn).toEqual(true);
  expect(new Kin(140).IsMysticColumn).toEqual(true);
  expect(new Kin(260).IsMysticColumn).toEqual(false);
});

test('Portals matrix should contains 52 portals', () => {
  expect(PortalsMatrix.filter((val,index) => val === 1).length).toEqual(52);
});

test('Portals matrix should contains 20 central rows', () => {
  expect(PortalsMatrix.filter((val,index) => val === 2).length).toEqual(20);
});

test('Portals matrix should contain 260 kins', () => {
  expect(PortalsMatrix.length).toEqual(260);
});

test('Zolkin rows should be 1 based and correct', () => {
  expect(new Kin(1).ZolkinColumn).toEqual(1);
  expect(new Kin(21).ZolkinColumn).toEqual(2);
  expect(new Kin(120).ZolkinColumn).toEqual(6);
  expect(new Kin(121).ZolkinColumn).toEqual(7);
  expect(new Kin(140).ZolkinColumn).toEqual(7);
  expect(new Kin(141).ZolkinColumn).toEqual(8);
  expect(new Kin(240).ZolkinColumn).toEqual(12);
  expect(new Kin(241).ZolkinColumn).toEqual(13);
  expect(new Kin(260).ZolkinColumn).toEqual(13);
});

test('Zolkin rows should be 1 based and correct', () => {
  expect(new Kin(1).ZolkinRow).toEqual(1);
  expect(new Kin(20).ZolkinRow).toEqual(20);
  expect(new Kin(21).ZolkinRow).toEqual(1);
  expect(new Kin(120).ZolkinRow).toEqual(20);
  expect(new Kin(121).ZolkinRow).toEqual(1);
  expect(new Kin(140).ZolkinRow).toEqual(20);
  expect(new Kin(141).ZolkinRow).toEqual(1);
  expect(new Kin(240).ZolkinRow).toEqual(20);
  expect(new Kin(241).ZolkinRow).toEqual(1);
  expect(new Kin(260).ZolkinRow).toEqual(20);
});
