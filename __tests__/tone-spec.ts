import Tone from '../src/Tone';

test('Should get a kin for moment', () => {
  let tone = new Tone(1);
  expect(tone.Number).toBe(1);
});
