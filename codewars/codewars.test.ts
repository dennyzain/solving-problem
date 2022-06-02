import RomanNumeralsDecoder from './RomanNumeralsDecoder';
import isValidWalk from './TakeATenMinutesWalk';

//  ! -------------- RomanNumeralsDecoder --------------
test('XXI should be 21', () => {
  expect(RomanNumeralsDecoder('XXI')).toBe(21);
});
test('IV should be 4', () => {
  expect(RomanNumeralsDecoder('IV')).toBe(4);
});
// test('IIV should be 3', () => {
//   expect(RomanNumeralsDecoder('IIV')).toBe(3);
// });

//  ! -------------- Take a Ten Minutes Walk --------------

test('is valid walk?', () => {
  expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true);
});

test('is valid walk? case2', () => {
  expect(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toBe(false);
});

test('is valid walk? case3', () => {
  expect(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(false);
});

test('is valid walk? case4', () => {
  expect(isValidWalk(['w'])).toBe(false);
});
