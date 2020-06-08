import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSelectedKenoNumbers,
  getStakeValue,
  getGameStatus,
} from "store/KenoGameStore/KenoGameStore.selectors";
import {
  addKenoSelection,
  setGameStakeValue,
  setRandomKenosSelection,
  setGameStatus,
  removeKenoSelection,
} from "store/KenoGameStore/KenoGameStore.reducer";
import { checkKenoValue, getRandomNumbers } from "./helpers/helpers";
import { KenoNumberBoxesContainer } from "./KenoNumberBoxesContainer";
import { KenoStakesComponent } from "./KenoStakesComponent";
import { KenoStakesApprover } from "./KenoStakesApprover";
import { KenoGameStatus } from "./KenoGameStatus";
import { useKenoContainerStyle } from "./styled";
import { maximumNumberOfChoices, kenoMaximumAvailableQuantity } from "./const";

interface KenoGameProps {
  currentKenoStakes: number[];
  kenoNumbersQuantity: number;
}

const KenoGame: React.FC<KenoGameProps> = ({
  currentKenoStakes,
  kenoNumbersQuantity,
}) => {
  const selectedKenoNumbers = useSelector(getSelectedKenoNumbers);
  const currentStakeValue = useSelector(getStakeValue);
  const gameStatus = useSelector(getGameStatus);

  const dispatch = useDispatch();

  const selectKenoNumber = (kenoNumber: number) => {
    if (selectedKenoNumbers.includes(kenoNumber)) {
      dispatch(removeKenoSelection(kenoNumber));
    } else if (maximumNumberOfChoices > selectedKenoNumbers.length) {
      dispatch(addKenoSelection(kenoNumber));
    }
  };

  const updateStake = (stake: number) => {
    dispatch(setGameStakeValue(stake));
  };

  const handleLuckyPickClick = () => {
    dispatch(setRandomKenosSelection(getRandomNumbers(kenoNumbersQuantity)));
  };

  const handleGame = () => {
    if (
      maximumNumberOfChoices === selectedKenoNumbers.length &&
      currentStakeValue > 0 &&
      !Number.isNaN(currentStakeValue)
    ) {
      dispatch(setGameStatus("success"));
    } else {
      dispatch(setGameStatus("error"));
    }
  };

  const appStyle = useKenoContainerStyle();

  return (
    <div className={appStyle.appContainer}>
      Keno
      {checkKenoValue(kenoNumbersQuantity) ? (
        <div className={appStyle.gameContainer}>
          <KenoNumberBoxesContainer
            itemsQuantity={kenoNumbersQuantity}
            onSelectKenoNumber={selectKenoNumber}
            selectedKenoNumbers={selectedKenoNumbers}
          />
          <KenoStakesComponent
            currentStakes={currentKenoStakes}
            currentStakeValue={currentStakeValue}
            onStakeChange={updateStake}
          />
          <KenoGameStatus gameStatus={gameStatus} />
          <KenoStakesApprover
            currentStakes={currentKenoStakes}
            onLuckyPickClick={handleLuckyPickClick}
            onPlaceBetClick={handleGame}
          />
        </div>
      ) : (
        <p>
          Incorrect quantity of Keno numbers! Please provide one between{" "}
          {maximumNumberOfChoices} and {kenoMaximumAvailableQuantity}.
        </p>
      )}
    </div>
  );
};

export default KenoGame;
