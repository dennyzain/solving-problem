export default function FindOdd(input: number[]): number {
  const temp: { [key: string]: number } = {};
  let result = 0;
  for (const number of input) {
    if (temp[number] !== undefined) {
      temp[number] += 1;
    } else {
      temp[number] = 1;
    }
  }
  for (const key in temp) {
    if (temp[key] % 2 !== 0 || temp[key] == 1) result = Number(key);
  }
  return result;
}
