import React from 'react';
import {LogBox} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

LogBox.ignoreAllLogs();

const App = () => {
  return <HomeScreen />;
};

export default App;
