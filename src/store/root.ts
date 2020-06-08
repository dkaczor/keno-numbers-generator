import { kenoGameSlice } from "./KenoGameStore/KenoGameStore.reducer";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ReducerName } from "./KenoGameStore/KenoGameStore.constants";

export const rootReducer = combineReducers({
  [ReducerName]: kenoGameSlice.reducer,
});

export type RootType = ReturnType<typeof rootReducer>;

export const rootSelector = (rootReducer: RootType) => rootReducer;

export const appStore = createStore(rootReducer, composeWithDevTools());
