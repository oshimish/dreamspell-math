import { Tone } from '../src/Tone';

test('Should get a number for a tone', () => {
  const tone = new Tone(1);
  expect(tone.Number).toBe(1);
});

test('Should get a Cosmic tone for a zero', () => {
  const tone = new Tone(0);
  expect(tone.Number).toBe(13);
});

test('Tone should be normilized', () => {
  const tone = new Tone(14);
  expect(tone.Number).toBe(1);
});

test('Tone should be cloned from other tone', () => {
  const tone = new Tone(3);
  const tone2 = new Tone(tone);
  expect(tone.Number).toBe(tone.Number);
});
