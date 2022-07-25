import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const defaultNavigationOptions = {
  headerStyle: {backgroundColor: 'white'},
  headerTitleStyle: {color: 'midnightblue'},
  headerTintColor: 'light',
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //initialRouteName="Home"
        screenOptions={defaultNavigationOptions}>
        <Stack.Screen
          options={{title: 'Sign In'}}
          name="Sign In"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{title: 'Sign Up'}}
          name="Sign Up"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{title: 'Home'}}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
