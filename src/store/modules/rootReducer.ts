import { combineReducers } from "redux";

import color from './color/reducer';
import grid from './grid/reducer';
import { IColorState } from "./color/types";
import { IGridState } from "./grid/types";

export interface IState {
  color: IColorState;
  grid: IGridState;
}

export default combineReducers({
  color,
  grid,
});