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
    case 'ADD_ROW':
      return produce(state, draft => {
        const { index } = action.payload;
        let color;
        if (index === 0) {
          color = draft.rows[index];
          color = Color.fromHSL(color.hue, color.saturation, color.lightness);
        } else if (index === draft.rows.length) {
          color = draft.rows[index - 1];
          color = Color.fromHSL(color.hue, color.saturation, color.lightness);
        } else {
          const { hue: h1, saturation: s1, lightness: l1 } = draft.rows[index - 1];
          const { hue: h2, saturation: s2, lightness: l2 } = draft.rows[index];
          const hue = Math.round((h1 + h2) / 2);
          const saturation = Math.round((s1 + s2) / 2);
          const lightness = Math.round((l1 + l2) / 2);
          color = Color.fromHSL(hue, saturation, lightness);
        }
        draft.rows.splice(index, 0, color);
      });
    case 'REMOVE_ROW':
      return produce(state, draft => {
        const { index } = action.payload;
        draft.rows.splice(index, 1);
      });
    case 'ADD_COLUMN':
      return produce(state, draft => {
        const { index } = action.payload;
        let color;
        if (index === 0) {
          color = draft.columns[index];
          color = Color.fromHSL(color.hue, color.saturation, color.lightness);
        } else if (index === draft.columns.length) {
          color = draft.columns[index - 1];
          color = Color.fromHSL(color.hue, color.saturation, color.lightness);
        } else {
          const { hue: h1, saturation: s1, lightness: l1 } = draft.columns[index - 1];
          const { hue: h2, saturation: s2, lightness: l2 } = draft.columns[index];
          const hue = Math.round((h1 + h2) / 2);
          const saturation = Math.round((s1 + s2) / 2);
          const lightness = Math.round((l1 + l2) / 2);
          color = Color.fromHSL(hue, saturation, lightness);
        }
        draft.columns.splice(index, 0, color);
      });
    case 'REMOVE_COLUMN':
      return produce(state, draft => {
        const { index } = action.payload;
        draft.columns.splice(index, 1);
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
