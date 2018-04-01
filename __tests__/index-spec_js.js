var { dreamdate, kin, sign, tone } = require('../src/index');

var moment = require('moment');

test('Should have sign() available', () => {
  expect(sign(1)).toBeTruthy();
  expect(sign(1).number).toBe(1);
});

test('Should have tone() available', () => {
  expect(tone(1)).toBeTruthy();
  expect(tone(1).number).toBe(1);
});

test('Should have kin() available', () => {
  expect(kin(1)).toBeTruthy();
  expect(kin(1).number).toBe(1);
});

test('Should have dreamdate() available', () => {
  expect(dreamdate(new Date(1985, 7 - 1, 23))).toBeTruthy();
  expect(dreamdate(new Date(1985, 7 - 1, 23)).kin.number).toBe(81);
});

test('Should allow initialization using moment() object', () => {
  expect(dreamdate(moment('1985-07-23')).kin.number).toBe(81);
});

test('Should allow initialization using anything that can construct a moment() object', () => {
  expect(dreamdate([1985, 7-1, 23]).kin.number).toBe(81);
});
