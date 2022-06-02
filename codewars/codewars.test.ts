import RomanNumeralsDecoder from './RomanNumeralsDecoder';

//  ! -------------- RomanNumeralsDecoder --------------
test('XXI should be 21', () => {
  expect(RomanNumeralsDecoder('XXI')).toBe(21);
});
test('IV should be 4', () => {
  expect(RomanNumeralsDecoder('IV')).toBe(4);
});
test('IIV should be 3', () => {
  expect(RomanNumeralsDecoder('IIV')).toBe(3);
});
