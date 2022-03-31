import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// pages needed for navigation components
import HomeScreen from '../screens/home';
import GoalsScreen from '../screens/goals';
import CreateGoalsScreen from '../screens/createGoals';
import SettingsScreen from '../screens/settings';
import DiaryScreen from '../screens/diary';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signUp';
import QuestionScreen from '../screens/questionnaire';
import GoalGraphScreen from '../screens/goalGraph';

const Stack = createStackNavigator();

// creates the login stack so that users don't see the nav bar unless they are logged in
function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Sign Up' component={SignUpScreen} />
      <Stack.Screen name='Home Screen' component={Tabs} />
    </Stack.Navigator>
  );
}

// Creates the Goal Screen stack
function GoalsStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: [
          {
            backgroundColor: '#ea531a',
          },
        ],
        headerTitleStyle: [
          {
            color: '#fff',
          },
        ],
      }}
    >
      <Stack.Screen name='Your Goals' component={GoalsScreen} />
      <Stack.Screen name='Create Goals' component={CreateGoalsScreen} />
      <Stack.Screen
        name='Goal Graph'
        component={GoalGraphScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

// Creates the Diary Screen Stack
function DiaryStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: [
          {
            backgroundColor: '#fff',
          },
        ],
        headerTitleStyle: [
          {
            color: '#fff',
          },
        ],
      }}
    >
      <Stack.Screen name='Diary' component={DiaryScreen} />
    </Stack.Navigator>
  );
}

// Creates the tab bar
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    // home bar style
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hides the header so there are no duplicat headers when in goals
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: 'absolute',
            bottom: 10,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ea531a',
            borderRadius: 15,
            height: 60,
            ...styles.shadow, // adds shadow
          },
          null,
        ],
      }}
    >
      {/* home button */}
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}
            >
              <Image
                source={require('../assets/bottombar/home.png')}
                resizeMode='contain'
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#ffc340' : '#fff',
                }}
              />
            </View>
          ),
        }}
      />

      {/* health button */}
      <Tab.Screen
        name='Health'
        component={DiaryStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}
            >
              <Image
                source={require('../assets/bottombar/health.png')}
                resizeMode='contain'
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#ffc340' : '#fff',
                }}
              />
            </View>
          ),
        }}
      />

      {/* goals button */}
      {/* places the GoalsStack into the goals button */}
      <Tab.Screen
        name='Goals'
        component={GoalsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}
            >
              <Image
                source={require('../assets/bottombar/goals.png')}
                resizeMode='contain'
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#ffc340' : '#fff',
                }}
              />
            </View>
          ),
        }}
      />

      {/* settings button */}
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}
            >
              <Image
                source={require('../assets/bottombar/settings.png')}
                resizeMode='contain'
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#ffc340' : '#fff',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// adds shadow behind tab bar at the bottom
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

// sends Tabs or LoginStack to App.js

export default LoginStack;
// export default Tabs;
