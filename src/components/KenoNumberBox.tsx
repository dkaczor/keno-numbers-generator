import React from "react";
import { KenoNumberColor } from "./types";
import { useKenoNumberBoxStyle } from "./styled";

interface KenoNumberProps {
  color: KenoNumberColor;
  number: number;
  isSelected: boolean;
  onSelect: (kenoNumber: number) => void;
}

export const KenoNumberBox: React.FC<KenoNumberProps> = ({
  color,
  number,
  isSelected,
  onSelect,
}) => {
  const componentStyle = useKenoNumberBoxStyle(color);
  return (
    <div className={componentStyle.kenoCell}>
      <div
        className={isSelected ? "keno-item active" : "keno-item"}
        onClick={() => {
          onSelect(number);
        }}
      >
        {number}
      </div>
    </div>
  );
};
