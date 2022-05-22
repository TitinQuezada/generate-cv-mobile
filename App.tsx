import React from 'react';
import {HomePage} from './src/pages/HomePage/HomePage';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <HomePage />
    </PaperProvider>
  );
};

export default App;
