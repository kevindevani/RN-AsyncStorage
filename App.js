import React from 'react';
import {LogBox} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './src/theme/ThemeContext';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
