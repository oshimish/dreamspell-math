import Tone from '../src/Tone';

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
