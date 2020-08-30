import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';
import { IColorState } from '../../store/modules/color/types';

const Palete: React.FC = () => {
  const color = useSelector<IState, IColorState>(state => state.color);

  return (
    <svg width="50" height="50">
      <rect
        fill={color.background.toHexa()}
        width="35"
        height="35"
        x="15"
        y="15"
      />
      <rect
        fill={color.foreground.toHexa()}
        width="35"
        height="35"
        x="0"
        y="0"
      />
    </svg>
  );
}

export default Palete;