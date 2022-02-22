import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Data from "../screens/data";

// Configures screens to be passed into createStackNavigator.
// The top of the stack is shown by default.
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Long-COVID Tracker",
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
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: "#faaf41", 
            height: 60}
    }
});

// Returns a component that can be rendered to App.js.
export default createAppContainer(HomeStack);