import React, { useCallback } from 'react';

import { ColumnButtonsContainer } from './styles';
import { useDispatch } from 'react-redux';
import { addColumn, removeColumn } from '../../store/modules/grid/actions';

interface Props {
  index: number;
  canRemove?: boolean;
}

const ColumnButtons: React.FC<Props> = ({ index, canRemove = false }) => {
  const dispatch = useDispatch();
  
  const handleAddAfter = useCallback(() => {
    dispatch(addColumn(index+1));
  }, [dispatch, index]);
  
  const handleRemove = useCallback(() => {
    dispatch(removeColumn(index));
  }, [dispatch, index]);

  return (
    <ColumnButtonsContainer
      style={{gridRow: 1, gridColumn: index+3}}
    >
      {canRemove ? <button type="button" className="remove" onClick={handleRemove}>-</button> : null}
      <button type="button" className="add" onClick={handleAddAfter}>+</button>
    </ColumnButtonsContainer>
  );
}

export default ColumnButtons;