export default function findShort(s: string): number {
  const strIntoArr: Array<string> = s.split(' ');
  let result: number = strIntoArr[0].length;
  for (let i = 0; i < strIntoArr.length; i++) {
    if (strIntoArr[i].length < result) {
      result = strIntoArr[i].length;
    }
  }
  return result;
}

//  ! -------------- assessment --------------

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
