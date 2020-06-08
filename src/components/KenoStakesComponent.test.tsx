import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { KenoStakesComponent } from "./KenoStakesComponent";

const handleStakeChange = jest.fn();

test("rendering KenoStakesComponent component, with event handling", () => {
  const { getByRole, container } = render(
    <KenoStakesComponent
      currentStakes={[100, 200, 300, 400, 500]}
      onStakeChange={handleStakeChange}
      currentStakeValue={0}
    />
  );
  const textInput = getByRole("textbox");
  const buttons = container.querySelectorAll("button");
  expect(buttons.length).toEqual(5);
  expect(textInput).toHaveAttribute("value", "0");
  fireEvent.click(buttons[0]);
  expect(handleStakeChange).toBeCalledWith("100");
  fireEvent.change(textInput, { target: { value: "20" } });
  expect(handleStakeChange).toBeCalledWith("20");
});

test("rendering KenoStakesComponent without buttons and with currently set stake", () => {
  const { getByRole, container } = render(
    <KenoStakesComponent
      currentStakes={[]}
      onStakeChange={handleStakeChange}
      currentStakeValue={100}
    />
  );
  const buttons = container.querySelectorAll("button");
  expect(buttons.length).toEqual(0);
  const textInput = getByRole("textbox");
  expect(textInput).toHaveAttribute("value", "100");
});
