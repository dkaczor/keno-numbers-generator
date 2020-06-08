import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerName } from "./KenoGameStore.constants";
import { GameStatusType } from "./KenoGameStore.types";

export interface KenoGameStateInterface {
  selectedKenoNumbers: number[];
  gameStakeValue: number;
  gameStatus: GameStatusType;
}

const initialState = {
  gameStatus: "initial",
  gameStakeValue: 0,
  selectedKenoNumbers: [],
} as KenoGameStateInterface;

export const kenoGameSlice = createSlice({
  name: ReducerName,
  initialState,
  reducers: {
    addKenoSelection: (
      state,
      action: PayloadAction<number>
    ): KenoGameStateInterface => ({
      ...state,
      gameStatus: "initial",
      selectedKenoNumbers: [...state.selectedKenoNumbers, action.payload],
    }),

    removeKenoSelection: (
      state,
      action: PayloadAction<number>
    ): KenoGameStateInterface => {
      const filteredSelectedKenoNumbers = [...state.selectedKenoNumbers].filter(
        (selectedNumber) => selectedNumber !== action.payload
      );
      return {
        ...state,
        gameStatus: "initial",
        selectedKenoNumbers: filteredSelectedKenoNumbers,
      };
    },

    setRandomKenosSelection: (
      state,
      action: PayloadAction<number[]>
    ): KenoGameStateInterface => ({
      ...state,
      gameStatus: "initial",
      selectedKenoNumbers: [...action.payload],
    }),

    setGameStakeValue: (
      state,
      action: PayloadAction<number>
    ): KenoGameStateInterface => ({
      ...state,
      gameStatus: "initial",
      gameStakeValue: action.payload,
    }),

    setGameStatus: (
      state,
      action: PayloadAction<GameStatusType>
    ): KenoGameStateInterface => {
      if (action.payload === "error")
        return { ...state, gameStatus: action.payload };
      return {
        ...state,
        gameStatus: action.payload,
        gameStakeValue: 0,
        selectedKenoNumbers: [],
      };
    },
    destroyKenoGameSlice: (): KenoGameStateInterface => initialState,
  },
});

export const {
  destroyKenoGameSlice,
  addKenoSelection,
  setGameStakeValue,
  setGameStatus,
  setRandomKenosSelection,
  removeKenoSelection,
} = kenoGameSlice.actions;
