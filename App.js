import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './routes/tabs';
import { View, Text, LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

LogBox.ignoreAllLogs();

// Used for tab navigation
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
