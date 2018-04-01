import { Sign } from '../src/Sign';

test('Should get a number for a constructed sign', () => {
  const sign = new Sign(1);
  expect(sign.number).toBe(1);
});

test('Should get a number for a static sign', () => {
  const sign = Sign.RedDragon;
  expect(sign.number).toBe(1);
});

test('Should get a nice string for a sign', () => {
  const sign = Sign.RedDragon;
  expect(sign.toString()).toBe('RedDragon');
});

test('Should normilize sign numbers', () => {
  const sign = new Sign(21);
  expect(sign.number).toBe(1);
});

test('Should have Is() working', () => {
  expect(new Sign(21).eq(new Sign(21))).toBe(true);
});

test('Should be cloned from other instance', () => {
  expect(new Sign(new Sign(3))).toEqual(new Sign(3));
});
