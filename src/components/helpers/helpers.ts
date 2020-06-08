import {
  maximumNumberOfChoices,
  kenoMaximumAvailableQuantity,
} from "components/const";

export const checkKenoValue = (value: number) =>
  value <= kenoMaximumAvailableQuantity && value >= maximumNumberOfChoices
    ? true
    : false;

export const checkIfSelected = (
  kenoNumber: number,
  selectedKenoNumbers: number[]
) => selectedKenoNumbers.includes(kenoNumber);

export const getRandomNumbers = (kenoNumbersQuantity: number) => {
  const generatedArray = Array.from(
    { length: kenoNumbersQuantity },
    (_, number) => number + 1
  );
  const result = [];

  for (let i = 0; i < maximumNumberOfChoices; i++) {
    let random = Math.floor(Math.random() * generatedArray.length);
    result.push(generatedArray[random]);
    generatedArray.splice(generatedArray.indexOf(generatedArray[random]), 1);
  }
  return result;
};
