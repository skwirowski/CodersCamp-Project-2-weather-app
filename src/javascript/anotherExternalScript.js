export function anotherExternalFunction() {
  const arr = [1, 2, 3, 4, 5];

  const newArr = arr.map(item => `${item}-stringified`);
  return newArr;
}
