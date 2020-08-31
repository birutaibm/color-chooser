import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';
import { GridContentCell } from './styles';

interface Props {
  rowIndex: number;
  columnIndex: number;
}

const GridCell: React.FC<Props> = ({ rowIndex, columnIndex }) => {
  const background = useSelector<IState, string>(state =>
    state.grid.columns[columnIndex].toHexa()
  );

  const foreground = useSelector<IState, string>(state =>
    state.grid.rows[rowIndex].toHexa()
  );

  return (
    <GridContentCell
      background={background}
      foreground={foreground}
      row={rowIndex + 3}
      column={columnIndex + 3}
    >
      Oi
      <div className="tooltiptext">
        Background: {background} <br/>
        Foreground: {foreground} <br/>
      </div>
    </GridContentCell>
  );
}

export default GridCell;