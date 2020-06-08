import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { KenoNumberBox } from "./KenoNumberBox";

const onSelect = jest.fn();

test("rendering KenoNumberBox component, with event handling", () => {
  const { getByText, rerender } = render(
    <KenoNumberBox
      color="blue"
      number={1}
      isSelected={false}
      onSelect={onSelect}
    />
  );
  const kenoNumber = getByText("1");
  expect(kenoNumber).toBeInTheDocument();
  expect(kenoNumber).toHaveStyle(`background: rgb(4,154,209)`);
  expect(kenoNumber.classList).not.toContain("active");
  fireEvent.click(kenoNumber);
  expect(onSelect).toBeCalled();
  expect(onSelect).toBeCalledWith(1);
  rerender(
    <KenoNumberBox
      color="blue"
      number={1}
      isSelected={true}
      onSelect={onSelect}
    />
  );
  expect(kenoNumber.classList).toContain("active");
});
