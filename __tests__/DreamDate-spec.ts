import { DreamDate } from '../src/DreamDate';
import { Colors, Dots } from '../src/enums';
import { Kin } from '../src/Kin';
import { Sign } from '../src/Sign';
import { Tone } from '../src/Tone';

// tslint:disable-next-line:no-var-requires
const moment = require('moment');

test('DreamSpellDate_Kin_260', () => {
  const cosmicSun = new DreamDate(new Date(2010, 12 - 1, 24));
  expect(cosmicSun.kin).toEqual(new Kin(260));
  expect(cosmicSun.kin.sign).toEqual(Sign.YellowSun);
  expect(cosmicSun.kin.tone).toEqual(Tone.Cosmic);
});

test('DreamSpellDate_Kin_1', () => {
  const magneticDragon = new DreamDate(new Date(2010, 12 - 1, 25));
  expect(magneticDragon.kin).toEqual(new Kin(1));
  expect(magneticDragon.kin.sign).toEqual(Sign.RedDragon);
  expect(magneticDragon.kin.tone).toEqual(Tone.Magnetic);
});

test('DreamSpellDate_Kin_EndOfCycle', () => {
  const resonantHand = new DreamDate(new Date(2012, 12 - 1, 21));
  expect(resonantHand.kin).toEqual(new Kin(207));
  expect(resonantHand.kin.sign).toEqual(Sign.BlueHand);
  expect(resonantHand.kin.tone).toEqual(Tone.Crystal);
});

test('DreamSpellDate_Kin_My', () => {
  const electricDragon = new DreamDate(new Date(1985, 7 - 1, 23));
  expect(electricDragon.kin).toEqual(new Kin(81));
  expect(electricDragon.kin.sign).toEqual(Sign.RedDragon);
  expect(electricDragon.kin.tone).toEqual(Tone.Electric);
  expect(electricDragon.moon).toEqual(Tone.Cosmic.number);
  expect(electricDragon.day).toEqual(27);
  expect(electricDragon.dayOfWeek).toEqual(6);
  expect(electricDragon.week).toEqual(Colors.Yellow);
});

test('DreamSpellDate_1328', () => {
  const date = new DreamDate(new Date(2014, 6 - 1, 11));
  expect(date.kin).toEqual(new Kin(224));
  expect(date.moon).toEqual(Tone.Crystal.number);
  expect(date.day).toEqual(13);
  expect(date.dayOfWeek).toEqual(6);
  expect(date.week).toEqual(Colors.White);
});

test('7 KIMI - 19.9 - 2018-03-25', () => {
  const date = new DreamDate(new Date(2018, 3 - 1, 25));
  const date2 = new DreamDate(new Date(2018, 3 - 1, 24));
  expect(date.kin).toEqual(new Kin(46));
  expect(date.moon).toEqual(Tone.Solar.number);
  expect(date.day).toEqual(19);
  expect(date.dayOfWeek).toEqual(5);
  expect(date.plasma).toEqual(5);
  expect(date.week).toEqual(Colors.Blue);
});

test('3 CHUEN - 19.9 - 2027-03-25', () => {
  const date = new DreamDate(new Date(2027, 3 - 1, 25));
  expect(date.kin).toEqual(new Kin(211));
  expect(date.moon).toEqual(Tone.Solar.number);
  expect(date.day).toEqual(19);
  expect(date.dayOfWeek).toEqual(5);
  expect(date.plasma).toEqual(5);
  expect(date.week).toEqual(Colors.Blue);
});

test('10 CHUEN - 29.2 - 2020-02-29 Leap Days - Monkey Trick', () => {
  const date28 = new DreamDate(new Date(2020, 2 - 1, 28));
  expect(date28.kin).toEqual(new Kin(231));
  expect(date28.moon).toEqual(Tone.Galactic.number);
  expect(date28.day).toEqual(22);
  expect(date28.dayOfWeek).toEqual(1);
  expect(date28.plasma).toEqual(1);
  expect(date28.week).toEqual(Colors.Yellow);

  const date29 = new DreamDate(new Date(2020, 2 - 1, 29));
  expect(date29.kin).toEqual(new Kin(231));
  expect(date29.moon).toEqual(Tone.Galactic.number);
  expect(date29.day).toEqual(22);
  expect(date29.dayOfWeek).toEqual(1);
  expect(date29.plasma).toEqual(1);
  expect(date29.week).toEqual(Colors.Yellow);

  const dateNext = new DreamDate(new Date(2020, 3 - 1, 1));
  expect(dateNext.kin).toEqual(new Kin(232));
  expect(dateNext.moon).toEqual(Tone.Galactic.number);
  expect(dateNext.day).toEqual(23);
  expect(dateNext.dayOfWeek).toEqual(2);
  expect(dateNext.plasma).toEqual(2);
  expect(dateNext.week).toEqual(Colors.Yellow);
});

test('Should get equal dates for dates with our withour date part', () => {
  // const date = new DreamDate(new Date(2018, 2 - 1, 28));
  const date = new DreamDate(moment([2018, 2 - 1, 28]));
  const date2 = new DreamDate(moment([2018, 2 - 1, 28, 23, 0, 0]));
  expect(date.kin).toEqual(date2.kin);
});

test('Should be cloned from other instance', () => {
  expect(new DreamDate(new DreamDate(moment()))).toEqual(
    new DreamDate(moment())
  );
});
