import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { KenoStakesApprover } from "./KenoStakesApprover";

const handleLuckyPickClick = jest.fn();
const handlePlaceBetClick = jest.fn();

test("rendering KenoStakesApprover component, with event handling", () => {
  const { getByText } = render(
    <KenoStakesApprover
      currentStakes={[100, 200, 300, 400, 500]}
      onLuckyPickClick={handleLuckyPickClick}
      onPlaceBetClick={handlePlaceBetClick}
    />
  );
  const luckyPickButton = getByText("Lucky Pick");
  const placeBetButton = getByText("Place bet");

  expect(luckyPickButton).toBeInTheDocument();
  expect(placeBetButton).toBeInTheDocument();

  fireEvent.click(luckyPickButton);
  expect(handleLuckyPickClick).toBeCalled();
  fireEvent.click(placeBetButton);
  expect(handleLuckyPickClick).toBeCalled();
});
