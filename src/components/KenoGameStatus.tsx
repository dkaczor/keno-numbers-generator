import React from "react";
import { GameStatusType } from "store/KenoGameStore/KenoGameStore.types";
import { GameStatusMessages } from "./types";
import { useKenoGameStatus } from "./styled";

interface KenoGameStatusProps {
  gameStatus: GameStatusType;
}

export const KenoGameStatus: React.FC<KenoGameStatusProps> = ({
  gameStatus,
}) => {
  const componentStyle = useKenoGameStatus(gameStatus);
  return (
    <p className={componentStyle.gameStatus}>
      {GameStatusMessages[gameStatus]}
    </p>
  );
};
