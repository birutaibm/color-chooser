import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SelectorsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 5px;
  margin: auto 10px;

  #fg-hue {
    grid-column: 2;
    grid-row: 2;
  }

  #fg-saturation {
    grid-column: 3;
    grid-row: 2;
  }

  #fg-lightness {
    grid-column: 4;
    grid-row: 2;
  }

  #bg-hue {
    grid-column: 2;
    grid-row: 3;
  }

  #bg-saturation {
    grid-column: 3;
    grid-row: 3;
  }

  #bg-lightness {
    grid-column: 4;
    grid-row: 3;
  }
`;

interface LabelProps {
  position: number;
}

const BaseLabel = styled.span`
  font-size: 20px;
  grid-column: 1;
  grid-row: 1;
`;

export const RowLabel = styled(BaseLabel)<LabelProps>`
  grid-row: ${({position}) => position + 1};
`;

export const ColumnLabel = styled(BaseLabel)<LabelProps>`
  grid-column: ${({position}) => position + 1};
`;
