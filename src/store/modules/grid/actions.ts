export function changeRow(index: number, value: number) {
  return {
    type: 'CHANGE_ROW',
    payload: {
      index,
      value,
    }
  };
}

export function removeRow(index: number) {
  return {
    type: 'REMOVE_ROW',
    payload: {
      index,
    }
  };
}

export function addRow(index: number) {
  return {
    type: 'ADD_ROW',
    payload: {
      index,
    }
  };
}

export function addColumn(index: number) {
  return {
    type: 'ADD_COLUMN',
    payload: {
      index,
    }
  };
}

export function removeColumn(index: number) {
  return {
    type: 'REMOVE_COLUMN',
    payload: {
      index,
    }
  };
}

export function changeColumn(index: number, value: number) {
  return {
    type: 'CHANGE_COLUMN',
    payload: {
      index,
      value,
    }
  };
}
