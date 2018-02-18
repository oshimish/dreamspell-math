import { Moment } from 'moment';
import DreamSpellDate from '../src/DreamSpellDate';
import Kin from '../src/Kin';
import Tone from '../src/Tone';
const moment = require('moment');

test('DreamSpellDate_Kin', () => {
    const cosmicSun = new DreamSpellDate(new moment(2010, 12, 24));
    expect(cosmicSun.Kin).toBe(new Kin(260));
    expect(cosmicSun.Kin.Sign).toBe(Sign.YellowSun);
    expect(cosmicSun.Kin.Tone).toBe(Tone.Cosmic);

    const magneticDragon = new DreamSpellDate(new moment(2010, 12, 25));
    expect(magneticDragon.Kin).toBe(new Kin(1));
    expect(magneticDragon.Kin.Sign).toBe(Sign.RedDragon);
    expect(magneticDragon.Kin.Tone).toBe(Tone.Magnetic);

    const resonantHand = new DreamSpellDate(new moment(2012, 12, 21));
    expect(resonantHand.Kin).toBe(new Kin(207));
    expect(resonantHand.Kin.Sign).toBe(Sign.BlueHand);
    expect(resonantHand.Kin.Tone).toBe(Tone.Crystal);

    const electricDragon = new DreamSpellDate(new moment(1985, 7, 23));
    expect(electricDragon.Kin).toBe(new Kin(81));
    expect(electricDragon.Kin.Sign).toBe(Sign.RedDragon);
    expect(electricDragon.Kin.Tone).toBe(Tone.Electric);
});


test('DreamSpellDate_1328', () => {
    const date = new DreamSpellDate(new moment(2014, 6, 11));
    expect(date.Kin).toBe(new Kin(224));
    expect(date.Moon).toBe(Tone.Crystal);
    expect(date.Day).toBe(13);
    expect(date.DayOfWeek).toBe(6);
    expect(date.Week).toBe(Chromatic.White);
});
