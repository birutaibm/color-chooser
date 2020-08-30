import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';
import * as Actions from '../../store/modules/color/actions';

interface Props {
  channel: 'background' | 'foreground';
  property: 'hue' | 'saturation' | 'lightness';
}

const Selector: React.FC<Props> = ({ channel, property }) => {
  const id = useMemo(() => {
    return channel === 'background' ? `bg-${property}` : `fg-${property}`;
  }, [channel, property]);

  const max = useMemo(() => {
    return property === 'hue' ? 360 : 100;
  }, [property]);

  const action = useMemo(() => {
    if (channel === 'background') {
      switch (property) {
        case 'hue':
          return Actions.changeBackgroundHue;
        case 'saturation':
          return Actions.changeBackgroundSaturation;
        case 'lightness':
          return Actions.changeBackgroundLightness;
      }
    }
    switch (property) {
      case 'hue':
        return Actions.changeForegroundHue;
      case 'saturation':
        return Actions.changeForegroundSaturation;
      case 'lightness':
        return Actions.changeForegroundLightness;
    }
  }, [channel, property]);

  const value = useSelector<IState, number>(state => state.color[channel][property]);
  const dispatch = useDispatch();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(action(e.target.valueAsNumber));
  }, [dispatch, action]);

  return (
    <input
      type="number"
      min="0"
      max={max}
      name={id}
      id={id}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Selector;