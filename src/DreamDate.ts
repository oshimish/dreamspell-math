import { Moment } from 'moment';
import { Chromatic, Dots } from './enums';
import { Kin } from './Kin';
import { Tone } from './Tone';
// tslint:disable-next-line:no-var-requires
const moment = require('moment');

export class DreamDate {
  public readonly DayOfYear: number;
  public readonly Moon: number;
  public readonly Week: Chromatic;
  public readonly Plasma: number;
  public readonly DayOfWeek: number;
  public readonly Day: number;
  public readonly YearKin: Kin;
  public readonly Kin: Kin;

  constructor(date: any) {
    let dateMoment = moment(date);
    dateMoment = dateMoment.startOf('date');
    this.Kin = new Kin(this.GetKinFromDateTime(dateMoment.clone()));

    // 13-28

    let yearBirthday = moment([dateMoment.year(), 7 - 1, 26]);

    // before gr new year
    if (dateMoment.isBefore(yearBirthday)) {
      yearBirthday = yearBirthday.add(-1, 'year');
    }

    this.DayOfYear = dateMoment.diff(yearBirthday, 'days');
    this.Moon = Math.floor(this.DayOfYear / 28) + 1;
    this.Day = this.DayOfYear % 28 + 1;
    // Day = Day == 0 ? 28 : Day;
    this.YearKin = new Kin(this.GetKinFromDateTime(yearBirthday));
    this.DayOfWeek = this.Day % 7;
    this.DayOfWeek = this.DayOfWeek === 0 ? 7 : this.DayOfWeek;
    this.Plasma = this.DayOfWeek;
    this.Week = Math.floor((this.Day - 1) / 7) + 1;
  }

  private GetKinFromDateTime(dateMoment: Moment): number {
    let dayFix = 0;
    while (dateMoment.year() > 2010) {
      dayFix -= 365;
      dateMoment = dateMoment.add(-1, 'year');
    }

    while (dateMoment.year() < 2010) {
      dayFix += 365;
      dateMoment = dateMoment.add(1, 'year');
    }

    let days = dateMoment.diff(moment([2010, 12 - 1, 24]), 'days') - dayFix;

    while (days < 0) {
      days += 260;
    }

    const kin: number = days % 260;
    return kin;
  }
}

export function dreamdate(date: any): DreamDate {
  return new DreamDate(date);
}

export default { DreamDate, dreamdate };
