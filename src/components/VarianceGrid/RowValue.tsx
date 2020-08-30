import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../../store/modules/rootReducer';
import { changeRow } from '../../store/modules/grid/actions';

interface Props {
  index: number;
}

const RowValue: React.FC<Props> = ({ index }) => {
  const name = useMemo(() => `r${index}`, [index]);
  const value = useSelector<IState, number>(state => state.grid.rows[index].lightness);
  const dispatch = useDispatch();

  const handleChange = useCallback((value: number) => {
    dispatch(changeRow(index, value));
  }, [dispatch, index]);

  return (
    <input
      type="number"
      value={value}
      onChange={e => handleChange(e.target.valueAsNumber)}
      style={{gridRow: index+2, gridColumn: 1}}
      name={name}
      id={name}
      min={0}
      max={100}
    />
  );
}

export default RowValue;