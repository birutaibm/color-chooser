export function changeRow(index: number, value: number) {
  return {
    type: 'CHANGE_ROW',
    payload: {
      index,
      value,
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
