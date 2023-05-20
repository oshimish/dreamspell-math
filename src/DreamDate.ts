import { Moment } from 'moment';
import { Colors, Dots } from './enums';
import { Kin } from './Kin';
import { Tone } from './Tone';
// tslint:disable-next-line:no-var-requires
const moment: (a1?: any, a2?: any, a3?: any) => Moment = require('moment');

const getKinForDate = (dateMoment: Moment): Kin => {
  dateMoment = dateMoment.clone();
  let dayFix = 0;
  while (dateMoment.year() > 2018) {
    dayFix -= 365;
    dateMoment = dateMoment.add(-1, 'year');
  }

  while (dateMoment.year() < 2018) {
    dayFix += 365;
    dateMoment = dateMoment.add(1, 'year');
  }

  const dragon1Day = moment([2018, 2 - 1, 8]).dayOfYear();
  const dateDay = dateMoment.dayOfYear();
  let days = dateDay - dragon1Day + 1;
  days -= dayFix;

  while (days < 0) {
    days += 260;
  }

  const kin: number = days % 260;
  return new Kin(kin);
};

export class DreamDate {
  public readonly dayOfYear: number;
  public readonly moon: number;
  public readonly week: Colors;
  public readonly plasma: number;
  public readonly dayOfWeek: number;
  public readonly day: number;
  public readonly yearKin: Kin;
  public readonly kin: Kin;
  public readonly moment: Moment;

  constructor(date: any) {
    if (date instanceof DreamDate) {
      date = date.moment;
    }

    let dateMoment = moment(date);
    dateMoment = dateMoment.startOf('date');
    this.kin = getKinForDate(dateMoment);

    // 13-28
    let yearBirthday = moment([dateMoment.year(), 7 - 1, 26]);

    // before gr new year
    if (dateMoment.isBefore(yearBirthday)) {
      yearBirthday = yearBirthday.add(-1, 'year');
    }

    this.moment = dateMoment;
    this.dayOfYear = dateMoment.diff(yearBirthday, 'days');

    // check for leap years
    if (dateMoment.isLeapYear() && this.dayOfYear >= 218) {
      this.dayOfYear--;
    }

    this.moon = Math.floor(this.dayOfYear / 28) + 1;
    this.day = (this.dayOfYear % 28) + 1;
    // Day = Day == 0 ? 28 : Day;
    this.yearKin = getKinForDate(yearBirthday);
    this.dayOfWeek = this.day % 7;
    this.dayOfWeek = this.dayOfWeek === 0 ? 7 : this.dayOfWeek;
    this.plasma = this.dayOfWeek;
    this.week = Math.floor((this.day - 1) / 7) + 1;
  }

  getWavespellStart() {
    return dreamdate(
      this.moment.clone().add(-this.kin.tone.number + 1, "d")
    );
  }
}

export function dreamdate(date: any): DreamDate {
  return new DreamDate(date);
}

export default { DreamDate, dreamdate };
