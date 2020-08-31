import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';
import { IColorState } from '../../store/modules/color/types';

const Palete: React.FC = () => {
  const color = useSelector<IState, IColorState>(state => state.color);

  return (
    <svg width="100" height="100">
      <rect
        fill={color.background.toHexa()}
        width="70"
        height="70"
        x="30"
        y="30"
      />
      <rect
        fill={color.foreground.toHexa()}
        width="70"
        height="70"
        x="0"
        y="0"
      />
    </svg>
  );
}

export default Palete;