import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';

import RowValue from './RowValue';
import ColumnValue from './ColumnValue';
import GridCell from './GridCell';
import { Grid } from './styles';

const VarianceGrid: React.FC = () => {
  const rows = useSelector<IState, number>(state => state.grid.rows.length);
  const rowHeaders = useMemo(() => {
    const value = [];
    for (let index = 0; index < rows; index++) {
      value[index] = <RowValue key={`r${index}`} index={index} />;
    }
    return value
  }, [rows]);

  const columns = useSelector<IState, number>(state => state.grid.columns.length);
  const columnHeaders = useMemo(() => {
    const value = [];
    for (let index = 0; index < columns; index++) {
      value[index] = <ColumnValue key={`c${index}`} index={index} />;
    }
    return value
  }, [columns]);

  const gridCells = useMemo(() => {
    const value = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        value.push(
          <GridCell key={`c${col}r${row}`} rowIndex={row} columnIndex={col} />
        );
      }
    }
    return value
  }, [rows, columns]);

  return (
    <Grid>
      {rowHeaders}
      {columnHeaders}
      {gridCells}
    </Grid>
  );
}

export default VarianceGrid;