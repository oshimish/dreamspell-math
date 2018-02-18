import Kin from '../src/Kin';
import Tone from '../src/Tone';

test('Should get a correct signs and tones for the specific kins', () => {

  const kin81 = new Kin(81);
  expect(kin81.Sign).toBe(Sign.RedDragon);
  expect(kin81.Tone).toBe(Tone.Electric);
  expect(kin81.Chromatic).toBe(Chromatic.Red);

  const kin1 = new Kin(1);
  expect(kin1.Sign).toBe(Sign.RedDragon);
  expect(kin1.Tone).toBe(Tone.Magnetic);
  expect(kin1.Chromatic).toBe(Chromatic.Red);


  const kin260 = new Kin(260);
  const kin0 = new Kin(0);
  expect(kin260.Sign).toBe(kin0.Sign);
  expect(kin260.Tone).toBe(kin0.Tone);
  expect(kin260.Sign).toBe(Sign.YellowSun);
  expect(kin260.Tone).toBe(Tone.Cosmic);
  expect(kin260.Chromatic).toBe(Chromatic.Yellow);

  const tone = new Tone(1);
  expect(tone.Number).toBe(1);
});


test('Should get a correct wavespells for the specific kins', () => {
    expect(Sign.RedDragon).toBe((new Kin(1)).WaveSpell);
    expect(Sign.BlueStorm).toBe((new Kin(81)).WaveSpell);
    expect(Sign.WhiteMirror).toBe((new Kin(130)).WaveSpell);
    expect(Sign.BlueMonkey).toBe((new Kin(131)).WaveSpell);
    expect(Sign.YellowStar).toBe((new Kin(260)).WaveSpell);
});

test('Should get a correct analogs for the specific kins', () => {
    expect(new Kin(118)).toBe((new Kin(1)).Analog);
    expect(new Kin(1)).toBe((new Kin(118)).Analog);

    expect(new Kin(198)).toBe((new Kin(81)).Analog);
    expect(new Kin(81)).toBe((new Kin(198)).Analog);

    expect(new Kin(169)).toBe((new Kin(130)).Analog);
    expect(new Kin(130)).toBe((new Kin(169)).Analog);
});

test('Should get a correct drivers for the specific kins', () => {
    expect(Kin.Create(Sign.RedDragon, Tone.Magnetic)).toBe(Kin.Create(Sign.RedDragon, Tone.Magnetic).Driver);
    expect(Kin.Create(Sign.RedSerpent, Tone.Electric)).toBe(Kin.Create(Sign.RedDragon, Tone.Electric).Driver);

    expect(Kin.Create(Sign.YellowHuman, Tone.Lunar)).toBe(Kin.Create(Sign.YellowSun, Tone.Lunar).Driver);
    expect(Kin.Create(Sign.YellowSeed, Tone.Cosmic)).toBe(Kin.Create(Sign.YellowSun, Tone.Cosmic).Driver);

    expect(Kin.Create(Sign.BlueHand, Tone.Overtone)).toBe(Kin.Create(Sign.BlueStorm, Tone.Overtone).Driver);
    expect(Kin.Create(Sign.BlueEagle, Tone.SelfExisting)).toBe(Kin.Create(Sign.BlueStorm, Tone.SelfExisting).Driver);
});

test('Should get a correct antipods for the specific kins', () => {
    expect(new Kin(131)).toBe((new Kin(1)).Antipod);
    expect(new Kin(1)).toBe((new Kin(131)).Antipod);

    expect(new Kin(211)).toBe((new Kin(81)).Antipod);
    expect(new Kin(81)).toBe((new Kin(211)).Antipod);

    expect(new Kin(260)).toBe((new Kin(130)).Antipod);
    expect(new Kin(130)).toBe((new Kin(260)).Antipod);
});

test('Should get a correct occults for the specific kins', () => {
    expect(new Kin(260)).toBe((new Kin(1)).Occult);
    expect(new Kin(1)).toBe((new Kin(260)).Occult);

    expect(new Kin(180)).toBe((new Kin(81)).Occult);
    expect(new Kin(81)).toBe((new Kin(180)).Occult);

    expect(new Kin(131)).toBe((new Kin(130)).Occult);
    expect(new Kin(130)).toBe((new Kin(131)).Occult);
});

test('Should get a correct chromatics for the specific kins', () => {
    expect(new Kin(1).Chromatic).toBe(Chromatic.Red);
    expect(new Kin(2).Chromatic).toBe(Chromatic.White);
    expect(new Kin(3).Chromatic).toBe(Chromatic.Blue);
    expect(new Kin(4).Chromatic).toBe(Chromatic.Yellow);
    expect(new Kin(5).Chromatic).toBe(Chromatic.Red);


    expect(new Kin(257).Chromatic).toBe(Chromatic.Red);
    expect(new Kin(258).Chromatic).toBe(Chromatic.White);
    expect(new Kin(259).Chromatic).toBe(Chromatic.Blue);
    expect(new Kin(260).Chromatic).toBe(Chromatic.Yellow);

    expect(new Kin(0).Chromatic).toBe(Chromatic.Yellow);
});

test('Should get a correct kins when creating from sign and tone', () => {
    expect(new Kin(1)).toBe(Kin.Create(Sign.RedDragon, Tone.Magnetic));
    expect(new Kin(81)).toBe(Kin.Create(Sign.RedDragon, Tone.Electric));
    expect(new Kin(130)).toBe(Kin.Create(Sign.WhiteDog, Tone.Cosmic));
    expect(new Kin(131)).toBe(Kin.Create(Sign.BlueMonkey, Tone.Magnetic));
    expect(new Kin(260)).toBe(Kin.Create(Sign.YellowSun, Tone.Cosmic));
});
