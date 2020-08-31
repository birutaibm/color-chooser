import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';

import RowValue from './RowValue';
import ColumnValue from './ColumnValue';
import GridCell from './GridCell';
import { Grid } from './styles';
import ColumnButtons from './ColumnButtons';
import RowButtons from './RowButtons';

const VarianceGrid: React.FC = () => {
  const rows = useSelector<IState, number>(state => state.grid.rows.length);
  const rowHeaders = useMemo(() => {
    const value = [<RowButtons key="c-1a" index={-1} />];
    if (rows === 1) {
      value.push(<RowButtons key="c0a" index={0} />);
      value.push(<RowValue key="c0" index={0} />);
    } else {
      for (let index = 0; index < rows; index++) {
        value.push(<RowButtons key={`c${index}a`} index={index} canRemove />);
        value.push(<RowValue key={`r${index}`} index={index} />);
      }
    }
    return value
  }, [rows]);

  const columns = useSelector<IState, number>(state => state.grid.columns.length);
  const columnHeaders = useMemo(() => {
    const value = [<ColumnButtons key="c-1a" index={-1} />];
    if (columns === 1) {
      value.push(<ColumnButtons key="c0a" index={0} />);
      value.push(<ColumnValue key="c0" index={0} />);
    } else {
      for (let index = 0; index < columns; index++) {
        value.push(<ColumnButtons key={`c${index}a`} index={index} canRemove />);
        value.push(<ColumnValue key={`c${index}`} index={index} />);
      }
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