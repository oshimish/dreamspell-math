import { Moment } from 'moment';
let moment = require('moment');
import Kin from '../src/Kin';

test('Should get a kin for a moment', () => {
  const now = new Kin(moment());
  expect(now.Index).toBeGreaterThanOrEqual(0);
  expect(now.Index).toBeLessThanOrEqual(259);
});
