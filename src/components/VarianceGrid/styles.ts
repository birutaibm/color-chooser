import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  align-items: center;
  margin-top: 10px;

  input {
    border-radius: 0;
    padding-left: 10px;
  }
`;

export const ColumnButtonsContainer = styled.div`
  position: relative;
  display: flex;
  height: 14px;

  * {
    border-radius: 0;
    border: 0;
    padding: 0;
    font-size: 14px;
    line-height: 14px;
  }

  .add {
    position: absolute;
    width: 14px;
    right: -7px;
    top: 0;
    bottom: 0;
    z-index: 1;
  }

  .remove {
    margin: 0 7px;
    flex: 1;
  }
`;

export const RowButtonsContainer = styled.div`
  position: relative;
  display: flex;
  width: 14px;
  height: 100%;
  flex-direction: column;

  * {
    border-radius: 0;
    border: 0;
    padding: 0;
    font-size: 14px;
    line-height: 14px;
    width: 100%;
  }

  .add {
    position: absolute;
    z-index: 1;
    height: 14px;
    right: 0;
    left: 0;
    bottom: -7px;
  }

  .remove {
    margin: 7px 0;
    flex: 1;
  }
`;

interface CellProps {
  foreground: string;
  background: string;
  row: number;
  column: number;
}

export const GridContentCell = styled.div<CellProps>`
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({foreground}) => foreground};
  background-color: ${({background}) => background};
  grid-column: ${({column}) => column};
  grid-row: ${({row}) => row};
  text-align: center;
  position: relative;

  .tooltiptext {
    background-color: ${({background}) => background};
    padding: 5px;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;

    opacity: 0;
    transition: opacity 0.3s;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;