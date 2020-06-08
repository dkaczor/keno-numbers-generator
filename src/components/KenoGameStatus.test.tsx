import React from "react";
import { render } from "@testing-library/react";
import { KenoGameStatus } from "./KenoGameStatus";
import { errorMessage, successMessage } from "./KenoGame.test";

test("initial rendering KenoGameStatus component", () => {
  const { queryByText } = render(<KenoGameStatus gameStatus="initial" />);
  expect(queryByText(errorMessage)).not.toBeInTheDocument();
  expect(queryByText(successMessage)).not.toBeInTheDocument();
});

test("rendering KenoGameStatus component with error message", () => {
  const { queryByText } = render(<KenoGameStatus gameStatus="error" />);
  expect(queryByText(errorMessage.toString())).toBeInTheDocument();
  expect(queryByText(successMessage)).not.toBeInTheDocument();
});

test("rendering KenoGameStatus component with success message", () => {
  const { queryByText } = render(<KenoGameStatus gameStatus="success" />);
  expect(queryByText(errorMessage.toString())).not.toBeInTheDocument();
  expect(queryByText(successMessage)).toBeInTheDocument();
});
