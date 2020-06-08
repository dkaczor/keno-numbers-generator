import React from "react";
import { useKenoStakesComponentStyle } from "components/styled";

interface KenoStakesComponentInterface {
  currentStakes: number[];
  currentStakeValue: number;
  onStakeChange: (stake: number) => void;
}

export const KenoStakesComponent: React.FC<KenoStakesComponentInterface> = ({
  currentStakes,
  currentStakeValue,
  onStakeChange,
}) => {
  const handleStakeChange = (e: any) => {
    onStakeChange(e.target.value);
  };

  const componentStyle = useKenoStakesComponentStyle(currentStakes.length + 1);
  const kenoStakesButtons = currentStakes.map((kenoStake, index) => (
    <button key={index} value={kenoStake} onClick={handleStakeChange}>
      {"\uD83C\uDF9F"}
      {kenoStake}
    </button>
  ));
  return (
    <div className={componentStyle.kenoStakeContainer}>
      {kenoStakesButtons}
      <input
        type="text"
        value={currentStakeValue}
        onChange={handleStakeChange}
      />
    </div>
  );
};
