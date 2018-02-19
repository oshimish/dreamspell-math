import { Moment } from 'moment';
import { Chromatic, Dots } from './enums';
import Kin from './Kin';
import Tone from './Tone';
const moment = require('moment');

export default class DreamSpellDate {
  public readonly DayOfYear: number;
  public readonly Moon: number;
  public readonly Week: Chromatic;
  public readonly Plasma: number;
  public readonly DayOfWeek: number;
  public readonly Day: number;
  public readonly YearKin: Kin;
  public readonly Kin: Kin;

  constructor(date: Date) {
    const dateMoment = moment(date);
    this.Kin = new Kin(this.GetKinFromDateTime(dateMoment.clone()));

    // 13-28

    let yearBirthday = moment([dateMoment.year(), 7-1, 26]);

    // before gr new year
    if (dateMoment.isBefore(yearBirthday)) {
      yearBirthday = yearBirthday.add(-1, 'year');
    }

    this.DayOfYear = dateMoment.diff(yearBirthday, 'days');
    this.Moon = this.DayOfYear / 28 + 1;
    this.Day = this.DayOfYear % 28 + 1;
    // Day = Day == 0 ? 28 : Day;
    this.YearKin = new Kin(this.GetKinFromDateTime(yearBirthday));
    this.DayOfWeek = this.Day % 7;
    this.DayOfWeek = this.DayOfWeek === 0 ? 7 : this.DayOfWeek;
    this.Plasma = this.DayOfWeek;
    this.Week = (this.Day - 1) / 7 + 1;
  }

  private GetKinFromDateTime(dateTime: Moment): number {
    let dayFix = 0;
    while (dateTime.year() > 2010) {
      dayFix -= 365;
      dateTime = dateTime.add(-1, 'year');
    }

    while (dateTime.year() < 2010) {
      dayFix += 365;
      dateTime = dateTime.add(1, 'year');
    }

    let days = dateTime.diff(moment([2010, 12-1, 24]), 'days');

    while (days < 0) {
      days += 260;
    }

    const kin: number = days % 260;
    return kin;
  }
}
