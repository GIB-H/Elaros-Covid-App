import React, {useState} from 'react';
import * as Font from 'expo-font' // used for custom fonts
import Home from './screens/home';
import AppLoading from 'expo-app-loading'; // needed to check if the app has loaded
import Navigator from "./routes/homeStack"; // required to use Stack Navigation

// Function to get the fonts from ./assets/fonts
const getFonts = () => Font.loadAsync({
    'Ubuntu-Regular':require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });


export default function App() {
  // state to track if fonts are loaded yet
  const [fontsLoaded, setFontsLoaded] = useState(false); 

  // if~else check to ensure that fonts are loaded before loading anything
  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
    return ( // loads the fonts if they aren't loaded yet
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={()=> console.log("error")}
      />
    )
  }
}