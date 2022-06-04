import longestConsec from './ConsecutiveStrings';
import RomanNumeralsDecoder from './RomanNumeralsDecoder';
import findShort from './ShortestWord';
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

//  ! -------------- Shortest Word --------------

test('Should return the length of the shortest word(s)', () => {
  expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3);
});

test('Should return the length of the shortest word(s)', () => {
  expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3);
});

test('Should return the length of the shortest word(s)', () => {
  expect(findShort('lets talk about javascript the best language')).toBe(3);
});

test('Should return the length of the shortest word(s)', () => {
  expect(findShort('i want to travel the world writing code one day')).toBe(1);
});

test('Should return the length of the shortest word(s)', () => {
  expect(findShort('Lets all go on holiday somewhere very cold')).toBe(2);
});

test('Should return the length of the shortest word(s)', () => {
  expect(findShort("Let's travel abroad shall we")).toBe(2);
});

//  ! -------------- Consecutive Strings --------------

test('should be return longest from array of string', () => {
  expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toBe(
    'abigailtheta'
  );
});

test('should be return longest from array of string', () => {
  expect(
    longestConsec(
      ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
      1
    )
  ).toBe('oocccffuucccjjjkkkjyyyeehh');
});

test('should be return longest from array of string', () => {
  expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toBe(
    'ixoyx3452zzzzzzzzzzzz'
  );
});
