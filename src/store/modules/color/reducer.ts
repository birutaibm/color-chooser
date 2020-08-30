import { Reducer } from "redux";
import produce from 'immer';

import { IColorState } from "./types";
import Color from "../../../utils/Color";

const INITIAL_STATE = {
  background: Color.fromHexa('#123'),
  foreground: Color.fromHexa('#007042'),
};

const color: Reducer<IColorState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND_HUE':
      return produce(state, draft => {
        const { hue } = action.payload;
        const { saturation, lightness } = draft.background;
        draft.background = Color.fromHSL(hue, saturation, lightness);
      });
    case 'CHANGE_BACKGROUND_SATURATION':
      return produce(state, draft => {
        const { saturation } = action.payload;
        const { hue, lightness } = draft.background;
        draft.background = Color.fromHSL(hue, saturation, lightness);
      });
    case 'CHANGE_FOREGROUND_HUE':
      return produce(state, draft => {
        const { hue } = action.payload;
        const { saturation, lightness } = draft.foreground;
        draft.foreground = Color.fromHSL(hue, saturation, lightness);
      });
    case 'CHANGE_FOREGROUND_SATURATION':
      return produce(state, draft => {
        const { saturation } = action.payload;
        const { hue, lightness } = draft.foreground;
        draft.foreground = Color.fromHSL(hue, saturation, lightness);
      });
    default:
      return state;
  }
}

export default color