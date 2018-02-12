import { Moment } from 'moment';
import Kin from './Kin';
import Tone from './Tone';
const moment = require('moment');

export default class DreamSpellDate {
  public DayOfYear: number;
  public Moon: number;
  public Week: Chromatic;
  public Plasma: number;
  public DayOfWeek: number;
  public Day: number;
  public YearKin: Kin;
  public Kin: Kin;

  constructor(dateTime: Moment) {
    this.Kin = new Kin(this.GetKinFromDateTime(dateTime));

    // 13-28

    let yearBirthday = moment(dateTime.year(), 7, 26);

    // before gr new year
    if (dateTime < yearBirthday) {
      yearBirthday = yearBirthday.AddYears(-1);
    }

    this.DayOfYear = dateTime.diff(yearBirthday, 'days');
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

    let days = dateTime.diff(moment(2010, 12, 24), 'days');

    while (days < 0) {
      days += 260;
    }

    const kin: number = days % 260;
    return kin;
  }
}
