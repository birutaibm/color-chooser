import React, { useCallback } from 'react';

import { RowButtonsContainer } from './styles';
import { useDispatch } from 'react-redux';
import { addRow, removeRow } from '../../store/modules/grid/actions';

interface Props {
  index: number;
  canRemove?: boolean;
}

const RowButtons: React.FC<Props> = ({ index, canRemove = false }) => {
  const dispatch = useDispatch();
  
  const handleAddAfter = useCallback(() => {
    dispatch(addRow(index+1));
  }, [dispatch, index]);
  
  const handleRemove = useCallback(() => {
    dispatch(removeRow(index));
  }, [dispatch, index]);

  return (
    <RowButtonsContainer
      style={{gridRow: index+3, gridColumn: 1}}
    >
      {canRemove ? <button type="button" className="remove" onClick={handleRemove}>-</button> : null}
      <button type="button" className="add" onClick={handleAddAfter}>+</button>
    </RowButtonsContainer>
  );
}

export default RowButtons;