import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./routes/tabs";
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Used for tab navigation
const App = () => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;