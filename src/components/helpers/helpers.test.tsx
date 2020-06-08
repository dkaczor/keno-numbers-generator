import { checkKenoValue, checkIfSelected, getRandomNumbers } from "./helpers";

test("test getRandomNumbers function", () => {
  const isArrayUnique = (arr: Number[]) =>
    Array.isArray(arr) && new Set(arr).size === arr.length;
  for (let i = 5; i < 80; i++)
    expect(isArrayUnique(getRandomNumbers(i))).toBeTruthy();
});

test("test checkKenoValue function", () => {
  expect(checkKenoValue(80)).toBeTruthy();
  expect(checkKenoValue(81)).toBeFalsy();
  expect(checkKenoValue(5)).toBeTruthy();
  expect(checkKenoValue(4)).toBeFalsy();
});

test("test checkIfSelected function", () => {
  expect(checkIfSelected(8, [8, 10])).toBeTruthy();
  expect(checkIfSelected(8, [])).toBeFalsy();
  expect(checkIfSelected(1, [8, 10])).toBeFalsy();
});
