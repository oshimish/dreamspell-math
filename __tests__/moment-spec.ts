import { Moment } from 'moment';
import MomentFx from '../src/MomentFx';
let moment = require('moment');

test('Should get a kin for moment', () => {
  let now = moment();
  expect(now.test().kin).toBe(5);
});
