import { createSelector, Selector } from "reselect";
import { RootType, rootSelector } from "store/root";
import { GameStatusType } from "./KenoGameStore.types";
import { ReducerName } from "./KenoGameStore.constants";

export const getGameStatus: Selector<RootType, GameStatusType> = createSelector(
  rootSelector,
  (store) => store[ReducerName].gameStatus
);

export const getStakeValue: Selector<RootType, number> = createSelector(
  rootSelector,
  (store) => store[ReducerName].gameStakeValue
);

export const getSelectedKenoNumbers: Selector<
  RootType,
  number[]
> = createSelector(
  rootSelector,
  (store) => store[ReducerName].selectedKenoNumbers
);
