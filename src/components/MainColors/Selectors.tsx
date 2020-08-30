import React from 'react';

import { SelectorsGrid, RowLabel, ColumnLabel } from './styles';
import Selector from './Selector';

const Selectors: React.FC = () => {
  return (
    <SelectorsGrid>
      <ColumnLabel position={1}>Hue</ColumnLabel>
      <ColumnLabel position={2}>Saturation</ColumnLabel>
      <ColumnLabel position={3}>Lightness</ColumnLabel>
      <RowLabel position={2}>Background</RowLabel>
      <Selector channel="background" property="hue" />
      <Selector channel="background" property="saturation" />
      <Selector channel="background" property="lightness" />
      <RowLabel position={1}>Foreground</RowLabel>
      <Selector channel="foreground" property="hue" />
      <Selector channel="foreground" property="saturation" />
      <Selector channel="foreground" property="lightness" />
    </SelectorsGrid>
  );
}

export default Selectors;