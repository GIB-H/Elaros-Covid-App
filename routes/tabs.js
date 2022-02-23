import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";


import HomeScreen from "../screens/home";
import GoalsScreen from "../screens/goals";
import SettingsScreen from "../screens/settings";
import HealthScreen from "../screens/health";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                "tabBarShowLabel": false,
                "tabBarStyle": [{
                    "position": "absolute",
                    "bottom": 10,
                    "left": 20,
                    "right": 20,
                    "elevation": 0,
                    "backgroundColor": "#ea531a",
                    "borderRadius": 15,
                    "height": 60,
                    ... styles.shadow
                },
                null]}}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 0}}>
                        <Image 
                            source={require("../assets/bottombar/home.png")}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? "#ffc340" : "#fff"
                            }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Health" component={HealthScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 0}}>
                        <Image 
                            source={require("../assets/bottombar/health.png")}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? "#ffc340" : "#fff"
                            }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Goals" component={GoalsScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 0}}>
                        <Image 
                            source={require("../assets/bottombar/goals.png")}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? "#ffc340" : "#fff"
                            }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: "center", justifyContent: "center", top: 0}}>
                        <Image 
                            source={require("../assets/bottombar/settings.png")}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? "#ffc340" : "#fff"
                            }}
                        />
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default Tabs;