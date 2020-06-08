import React from "react";
import { fireEvent, render } from "@testing-library/react";
import KenoGame from "./KenoGame";
import { Provider } from "react-redux";
import { appStore } from "store/root";

export const errorMessage =
  "Something went wrong with your bet. Please select a stake and 5 Keno numbers";

export const successMessage = "Congratulations! You made your bet!";

test("rendering KenoGame with typical user journey", () => {
  const { getByText, container, queryByText } = render(
    <Provider store={appStore}>
      <KenoGame
        currentKenoStakes={[100, 200, 300, 500, 1000]}
        kenoNumbersQuantity={80}
      />
    </Provider>
  );

  const buttons = container.querySelectorAll("button");
  const stakeInput = container.querySelector("input");
  const kenoNumbers = container.querySelectorAll(".keno-item");
  const gameButton = getByText("Place bet");

  expect(buttons).toHaveLength(7);
  expect(stakeInput);
  fireEvent.click(buttons[0]);
  expect(stakeInput).toHaveAttribute("value", "100");
  fireEvent.click(buttons[1]);
  expect(stakeInput).toHaveAttribute("value", "200");
  fireEvent.click(gameButton);
  expect(queryByText(errorMessage)).toBeInTheDocument();
  fireEvent.click(kenoNumbers[1]);
  expect(queryByText(errorMessage)).not.toBeInTheDocument();
  fireEvent.click(kenoNumbers[2]);
  fireEvent.click(kenoNumbers[3]);
  fireEvent.click(kenoNumbers[4]);
  fireEvent.click(kenoNumbers[5]);
  expect(container.querySelectorAll(".keno-item.active")).toHaveLength(5);
  fireEvent.click(gameButton);
  expect(queryByText(successMessage)).toBeInTheDocument();
  expect(container.querySelectorAll(".keno-item.active")).toHaveLength(0);
});

test("test rendering of component with wrong props", () => {
  const { container, getByText } = render(
    <Provider store={appStore}>
      <KenoGame
        currentKenoStakes={[100, 200, 300, 500, 1000]}
        kenoNumbersQuantity={81}
      />
    </Provider>
  );

  expect(container.querySelector("p")).toBeInTheDocument();
  expect(
    getByText(
      "Incorrect quantity of Keno numbers! Please provide one between 5 and 80."
    )
  ).toBeInTheDocument();
});
