import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
`;

interface CellProps {
  foreground: string;
  background: string;
  row: number;
  column: number;
}

export const GridContentCell = styled.div<CellProps>`
  color: ${({foreground}) => foreground};
  background-color: ${({background}) => background};
  grid-column: ${({column}) => column};
  grid-row: ${({row}) => row};
  text-align: center;
  position: relative;
  display: inline-block;

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