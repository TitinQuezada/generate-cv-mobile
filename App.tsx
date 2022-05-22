import React from 'react';
import {HomePage} from './src/pages/HomePage/HomePage';
import {Provider as PaperProvider} from 'react-native-paper';
import './assets/i18n/i18n';

const App = () => {
  return (
    <PaperProvider>
      <HomePage />
    </PaperProvider>
  );
};

export default App;
