import React from 'react';

import Palete from './Palete';
import Selectors from './Selectors';
import { Container } from './styles';

const MainColors: React.FC = () => {
  return (
    <Container>
      <Palete />
      <Selectors />
    </Container>
  );
}

export default MainColors;