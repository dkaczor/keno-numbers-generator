import React from "react";
import { KenoNumberBox } from "./KenoNumberBox";
import { checkIfSelected } from "./helpers/helpers";
import { useKenoNumberBoxContainerStyle } from "./styled";

interface KenoNumberBoxesContainerProps {
  itemsQuantity: number;
  selectedKenoNumbers: number[];
  onSelectKenoNumber: (kenoNumber: number) => void;
}

export const KenoNumberBoxesContainer: React.FC<KenoNumberBoxesContainerProps> = ({
  itemsQuantity,
  selectedKenoNumbers,
  onSelectKenoNumber,
}) => {
  const componentStyle = useKenoNumberBoxContainerStyle();
  const quantityHalf = Number(itemsQuantity / 2);
  const KenoNumbers = [...Array(itemsQuantity)].map((_element, index) => (
    <KenoNumberBox
      number={index + 1}
      key={index}
      color={index >= quantityHalf ? "red" : "blue"}
      isSelected={checkIfSelected(index + 1, selectedKenoNumbers)}
      onSelect={onSelectKenoNumber}
    />
  ));
  return (
    <div className={componentStyle.kenoNumbersContainer}>{KenoNumbers}</div>
  );
};
