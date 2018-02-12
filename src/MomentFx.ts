import { Moment } from 'moment';
let moment = require('moment');

moment.fn.test = function() {
  const thisDate = this.clone();
  const initial = thisDate.local()._quarter || 'Q';
  const result = {
    quarter: 0,
    year: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    kin: 5
  };

  result.quarter = Math.ceil((thisDate.month() + 1.0) / 3.0);

  result.toString = () => {
    const str = initial + result.quarter + ' ' + result.year;
    return str;
  };

  return result;
};

// export class MomentFx {
//   private greeting: string;

//   constructor(message: string) {
//     this.greeting = message;
//   }

//   public greet(): string {
//     return `Bonjour, ${this.greeting}!`;
//   }
// }
