import * as index from '../src/index';
import Kin from '../src/Kin';

test('Should have Kin available', () => {
  // expect(index.DreamSpellDate).toBeTruthy();
  expect(new Kin(1)).toBeTruthy();
  // expect(index.Tone).toBeTruthy();
});
