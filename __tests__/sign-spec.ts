import {Sign} from '../src/Sign';

test('Should get a number for a constructed sign', () => {
  const sign = new Sign(1);
  expect(sign.Number).toBe(1);
});

test('Should get a number for a static sign', () => {
  const sign = Sign.RedDragon;
  expect(sign.Number).toBe(1);
});

test('Should get a nice string for a sign', () => {
  const sign = Sign.RedDragon;
  expect(sign.toString()).toBe('RedDragon');
});

test('Should normilize sign numbers', () => {
  const sign = new Sign(21);
  expect(sign.Number).toBe(1);
});

test('Should have Is() working', () => {
  expect(new Sign(21).Is(new Sign(21))).toBe(true);
});
