import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Review from "../screens/review";

// Configures screens to be passed into createStackNavigator.
// The top of the stack is shown by default.
const screens = {
    Home: {
        screen: Home
    },
    Review: {
        screen: Review
    }, 
}

const HomeStack = createStackNavigator(screens);

// Returns a component that can be rendered to App.js.
export default createAppContainer(HomeStack);