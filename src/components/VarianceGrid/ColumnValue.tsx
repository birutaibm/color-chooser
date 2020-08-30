import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';
import { changeColumn } from '../../store/modules/grid/actions';

interface Props {
  index: number;
}

const ColumnValue: React.FC<Props> = ({ index }) => {
  const name = useMemo(() => `c${index}`, [index]);
  const value = useSelector<IState, number>(state => state.grid.columns[index].lightness);
  const dispatch = useDispatch();

  const handleChange = useCallback((value: number) => {
    dispatch(changeColumn(index, value));
  }, [dispatch, index]);

  return (
    <input
      type="number"
      value={value}
      onChange={e => handleChange(e.target.valueAsNumber)}
      style={{gridRow: 1, gridColumn: index+2}}
      name={name}
      id={name}
      min={0}
      max={100}
    />
  );
}

export default ColumnValue;