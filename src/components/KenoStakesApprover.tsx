import React from "react";
import { useKenoStakeApproverStyle } from "./styled";

interface KenoStakesApproverInterface {
  currentStakes: number[];
  onLuckyPickClick: () => void;
  onPlaceBetClick: () => void;
}

export const KenoStakesApprover: React.FC<KenoStakesApproverInterface> = ({
  currentStakes,
  onLuckyPickClick,
  onPlaceBetClick,
}) => {
  const componentStyle = useKenoStakeApproverStyle(currentStakes.length + 1);
  return (
    <div className={componentStyle.kenoStakesApproverContainer}>
      <button onClick={onLuckyPickClick}>Lucky Pick</button>
      <button onClick={onPlaceBetClick}>Place bet</button>
    </div>
  );
};
