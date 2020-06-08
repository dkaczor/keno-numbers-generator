import React from "react";
import { render } from "@testing-library/react";
import { KenoNumberBoxesContainer } from "./KenoNumberBoxesContainer";

const onSelect = jest.fn();

test("rendering initial KenoNumberBoxContainer component", () => {
  const { container } = render(
    <KenoNumberBoxesContainer
      itemsQuantity={80}
      selectedKenoNumbers={[]}
      onSelectKenoNumber={onSelect}
    />
  );

  const kenoNumbers = container.querySelectorAll(".keno-item");
  const kenoNumbersActive = container.querySelectorAll(".keno-item.active");
  expect(kenoNumbers.length).toEqual(80);
  expect(kenoNumbersActive.length).toEqual(0);
  expect(kenoNumbers[1]).toHaveStyle(`background: rgb(4,154,209)`);
  expect(kenoNumbers[41]).toHaveStyle(`background: rgb(196, 42, 43)`);
});

test("rendering KenoNumberBoxContainer component after selection of some elements", () => {
  const { container } = render(
    <KenoNumberBoxesContainer
      itemsQuantity={80}
      selectedKenoNumbers={[1, 2]}
      onSelectKenoNumber={onSelect}
    />
  );

  const kenoNumbers = container.querySelectorAll(".keno-item");
  const kenoNumbersActive = container.querySelectorAll(".keno-item.active");
  expect(kenoNumbers.length).toEqual(80);
  expect(kenoNumbersActive.length).toEqual(2);
});

test("rendering KenoNumberBoxContainer component without itemsQuantity prop", () => {
  const { container } = render(
    <KenoNumberBoxesContainer
      itemsQuantity={0}
      selectedKenoNumbers={[]}
      onSelectKenoNumber={onSelect}
    />
  );

  const kenoNumbers = container.querySelectorAll(".keno-item");
  expect(kenoNumbers.length).toEqual(0);
});
