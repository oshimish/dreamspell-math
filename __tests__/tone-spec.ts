import Tone from '../src/Tone';

test('Should get a number for a tone', () => {
  const tone = new Tone(1);
  expect(tone.Number).toBe(1);
});
