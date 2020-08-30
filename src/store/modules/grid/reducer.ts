import { Reducer } from "redux";
import produce from 'immer';

import { IGridState } from "./types";
import Color from "../../../utils/Color";

const INITIAL_STATE: IGridState = {
  rows: [Color.fromHexa('#007042')],
  columns: [Color.fromHexa('#123')],
};

const grid: Reducer<IGridState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_ROW':
      return produce(state, draft => {
        const { index, value: lightness } = action.payload;
        const { hue, saturation } = draft.rows[index];
        draft.rows[index] = Color.fromHSL(hue, saturation, lightness);
      });
    case 'CHANGE_COLUMN':
      return produce(state, draft => {
        const { index, value: lightness } = action.payload;
        const { hue, saturation } = draft.columns[index];
        draft.columns[index] = Color.fromHSL(hue, saturation, lightness);
      });
    default:
      return state;
  }
}

export default grid;
