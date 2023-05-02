import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false}}
    >

    </AuthStack.Navigator>
  )
}

export default AuthNavigator;