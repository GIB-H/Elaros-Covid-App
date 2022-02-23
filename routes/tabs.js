import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import GoalsScreen from "../screens/goals";
import SettingsScreen from "../screens/settings";
import HealthScreen from "../screens/health";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Health" component={HealthScreen}/>
        <Tab.Screen name="Goals" component={GoalsScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
    );
}

export default Tabs;