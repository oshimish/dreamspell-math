import { Colors } from '../src/enums';
import { Kin, PORTALS_MATRIX } from '../src/Kin';
import { Sign } from '../src/Sign';
import { Tone } from '../src/Tone';

test('Should get a correct signs and tones for the specific kins', () => {
  const kin81 = new Kin(81);
  expect(kin81.sign).toEqual(Sign.RedDragon);
  expect(kin81.tone).toEqual(Tone.Electric);
  expect(kin81.color).toEqual(Colors.Red);

  const kin1 = new Kin(1);
  expect(kin1.sign).toEqual(Sign.RedDragon);
  expect(kin1.tone).toEqual(Tone.Magnetic);
  expect(kin1.color).toEqual(Colors.Red);

  const kin260 = new Kin(260);
  const kin0 = new Kin(0);
  expect(kin260.sign).toEqual(kin0.sign);
  expect(kin260.tone).toEqual(kin0.tone);
  expect(kin260.sign).toEqual(Sign.YellowSun);
  expect(kin260.tone).toEqual(Tone.Cosmic);
  expect(kin260.color).toEqual(Colors.Yellow);

  const tone = new Tone(1);
  expect(tone.number).toEqual(1);
});

test('Should get a correct wavespells for the specific kins', () => {
  expect(Sign.RedDragon).toEqual(new Kin(1).waveSpell);
  expect(Sign.BlueStorm).toEqual(new Kin(81).waveSpell);
  expect(Sign.WhiteMirror).toEqual(new Kin(130).waveSpell);
  expect(Sign.BlueMonkey).toEqual(new Kin(131).waveSpell);
  expect(Sign.YellowStar).toEqual(new Kin(260).waveSpell);
});

test('Should get a correct analogs for the specific kins', () => {
  expect(new Kin(118)).toEqual(new Kin(1).getOracle().analog);
  expect(new Kin(1)).toEqual(new Kin(118).getOracle().analog);

  expect(new Kin(198)).toEqual(new Kin(81).getOracle().analog);
  expect(new Kin(81)).toEqual(new Kin(198).getOracle().analog);

  expect(new Kin(169)).toEqual(new Kin(130).getOracle().analog);
  expect(new Kin(130)).toEqual(new Kin(169).getOracle().analog);
});

test('Should get a correct drivers for the specific kins', () => {
  expect(Kin.create(Sign.RedDragon, Tone.Magnetic)).toEqual(
    Kin.create(Sign.RedDragon, Tone.Magnetic).getOracle().driver
  );
  expect(Kin.create(Sign.RedSerpent, Tone.Electric)).toEqual(
    Kin.create(Sign.RedDragon, Tone.Electric).getOracle().driver
  );

  expect(Kin.create(Sign.YellowHuman, Tone.Lunar)).toEqual(
    Kin.create(Sign.YellowSun, Tone.Lunar).getOracle().driver
  );
  expect(Kin.create(Sign.YellowSeed, Tone.Cosmic)).toEqual(
    Kin.create(Sign.YellowSun, Tone.Cosmic).getOracle().driver
  );

  expect(Kin.create(Sign.BlueHand, Tone.Overtone)).toEqual(
    Kin.create(Sign.BlueStorm, Tone.Overtone).getOracle().driver
  );
  expect(Kin.create(Sign.BlueEagle, Tone.SelfExisting)).toEqual(
    Kin.create(Sign.BlueStorm, Tone.SelfExisting).getOracle().driver
  );
});

test('Should get a correct antipods for the specific kins', () => {
  expect(new Kin(131)).toEqual(new Kin(1).getOracle().antipod);
  expect(new Kin(1)).toEqual(new Kin(131).getOracle().antipod);

  expect(new Kin(211)).toEqual(new Kin(81).getOracle().antipod);
  expect(new Kin(81)).toEqual(new Kin(211).getOracle().antipod);

  expect(new Kin(260)).toEqual(new Kin(130).getOracle().antipod);
  expect(new Kin(130)).toEqual(new Kin(260).getOracle().antipod);
});

test('Should get a correct occults for the specific kins', () => {
  expect(new Kin(260)).toEqual(new Kin(1).getOracle().occult);
  expect(new Kin(1)).toEqual(new Kin(260).getOracle().occult);

  expect(new Kin(180)).toEqual(new Kin(81).getOracle().occult);
  expect(new Kin(81)).toEqual(new Kin(180).getOracle().occult);

  expect(new Kin(131)).toEqual(new Kin(130).getOracle().occult);
  expect(new Kin(130)).toEqual(new Kin(131).getOracle().occult);
});

test('Should get a correct Colorss for the specific kins', () => {
  expect(new Kin(1).color).toEqual(Colors.Red);
  expect(new Kin(2).color).toEqual(Colors.White);
  expect(new Kin(3).color).toEqual(Colors.Blue);
  expect(new Kin(4).color).toEqual(Colors.Yellow);
  expect(new Kin(5).color).toEqual(Colors.Red);

  expect(new Kin(257).color).toEqual(Colors.Red);
  expect(new Kin(258).color).toEqual(Colors.White);
  expect(new Kin(259).color).toEqual(Colors.Blue);
  expect(new Kin(260).color).toEqual(Colors.Yellow);

  expect(new Kin(0).color).toEqual(Colors.Yellow);
});

test('Should get a correct kins when creating from sign and tone', () => {
  expect(new Kin(1)).toEqual(Kin.create(Sign.RedDragon, Tone.Magnetic));
  expect(new Kin(81)).toEqual(Kin.create(Sign.RedDragon, Tone.Electric));
  expect(new Kin(130)).toEqual(Kin.create(Sign.WhiteDog, Tone.Cosmic));
  expect(new Kin(131)).toEqual(Kin.create(Sign.BlueMonkey, Tone.Magnetic));
  expect(new Kin(260)).toEqual(Kin.create(Sign.YellowSun, Tone.Cosmic));
});

test('Should get a correct galactic portals', () => {
  expect(new Kin(1).isGalacticPortal).toEqual(true);
  expect(new Kin(2).isGalacticPortal).toEqual(false);
  expect(new Kin(39).isGalacticPortal).toEqual(true);
  expect(new Kin(40).isGalacticPortal).toEqual(false);
  expect(new Kin(211).isGalacticPortal).toEqual(true);
  expect(new Kin(259).isGalacticPortal).toEqual(false);
  expect(new Kin(260).isGalacticPortal).toEqual(true);
});

test('Should get a correct ccentral rows', () => {

  // for (let index = 1; index <= 260; index++) {
  //   const element = new Kin(index);
  //   console.log(element.Index + "[r" + element.zolkinRow + ', c'
  //   + element.zolkinColumn + ']'  + ' (mi: '+ matrixIndex +') = m:'
  //   + element.isMysticColumn + ' g:' + element.isGalacticPortal)

  // }

  expect(new Kin(1).isMysticColumn).toEqual(false);
  expect(new Kin(120).isMysticColumn).toEqual(false);
  expect(new Kin(121).isMysticColumn).toEqual(true);
  expect(new Kin(131).isMysticColumn).toEqual(true);
  expect(new Kin(139).isMysticColumn).toEqual(true);
  expect(new Kin(140).isMysticColumn).toEqual(true);
  expect(new Kin(260).isMysticColumn).toEqual(false);
});

test('Portals matrix should contains 52 portals', () => {
  expect(PORTALS_MATRIX.filter((val,index) => val === 1).length).toEqual(52);
});

test('Portals matrix should contains 20 central rows', () => {
  expect(PORTALS_MATRIX.filter((val,index) => val === 2).length).toEqual(20);
});

test('Portals matrix should contain 260 kins', () => {
  expect(PORTALS_MATRIX.length).toEqual(260);
});

test('Zolkin rows should be 1 based and correct', () => {
  expect(new Kin(1).zolkinColumn).toEqual(1);
  expect(new Kin(21).zolkinColumn).toEqual(2);
  expect(new Kin(120).zolkinColumn).toEqual(6);
  expect(new Kin(121).zolkinColumn).toEqual(7);
  expect(new Kin(140).zolkinColumn).toEqual(7);
  expect(new Kin(141).zolkinColumn).toEqual(8);
  expect(new Kin(240).zolkinColumn).toEqual(12);
  expect(new Kin(241).zolkinColumn).toEqual(13);
  expect(new Kin(260).zolkinColumn).toEqual(13);
});

test('Zolkin rows should be 1 based and correct', () => {
  expect(new Kin(1).zolkinRow).toEqual(1);
  expect(new Kin(20).zolkinRow).toEqual(20);
  expect(new Kin(21).zolkinRow).toEqual(1);
  expect(new Kin(120).zolkinRow).toEqual(20);
  expect(new Kin(121).zolkinRow).toEqual(1);
  expect(new Kin(140).zolkinRow).toEqual(20);
  expect(new Kin(141).zolkinRow).toEqual(1);
  expect(new Kin(240).zolkinRow).toEqual(20);
  expect(new Kin(241).zolkinRow).toEqual(1);
  expect(new Kin(260).zolkinRow).toEqual(20);
});

test('Kin 1 should have name', () => {
  expect(new Kin(1).name).toBe('Magnetic RedDragon');
});

test('Kin 260 should have name', () => {
  expect(new Kin(260).name).toBe('Cosmic YellowSun');
});
