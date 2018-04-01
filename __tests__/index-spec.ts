import { dreamdate, kin, sign, tone } from '../src/index';

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
