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
