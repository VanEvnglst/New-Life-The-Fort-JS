import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn/sign-in';
import HomeScreen from '../screens/Home/home';
import HomeNavigator from './home-stack';


const Stack = createStackNavigator();

export default function MainStack() {
  // const isSignedIn = useSelector()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {/* {isSignedIn ?
        <Stack.Screen></Stack.Screen>
        } */}
        <Stack.Screen
          name={'Sign In'}
          component={SignIn}
        />
        <Stack.Screen
          name={'Main'}
          component={HomeNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}