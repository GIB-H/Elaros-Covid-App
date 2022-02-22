import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Data from "../screens/data";

// Configures screens to be passed into createStackNavigator.
// The top of the stack is shown by default.
const screens = {
    Home: {
        screen: Home, // defines which screen is linked
        navigationOptions: {
            title: "Long-COVID Tracker", // defines the name shown in the header
        },
    },
    Data: {
        screen: Data, 
        navigationOptions: {
            title: "Patient Data",  
        }, 
    },
}

const HomeStack = createStackNavigator(screens, {
    // customizes some of the default options for a page that will be used unless explicitly coded to be different
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: "#faaf41", 
            height: 60}
    }
});

// Returns a component that can be rendered to App.js.
export default createAppContainer(HomeStack);