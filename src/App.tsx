import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import MainColors from './components/MainColors';
import VarianceGrid from './components/VarianceGrid';

function App() {
  return (
    <Provider store={store}>
      <h1>Color chooser</h1>
      <MainColors />
      <VarianceGrid />
    </Provider>
  );
}

export default App;
