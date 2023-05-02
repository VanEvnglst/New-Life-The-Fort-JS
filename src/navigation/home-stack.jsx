import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/home';
import GivingScreen from '../screens/giving';
import BottomTabBar from '../components/bottom-tab';


const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Bottom Tab'}
    >
      <HomeStack.Screen
        name={'Bottom Tab'}
        component={TabRoutes}
      />
    </HomeStack.Navigator>
  )
}

function TabRoutes() {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomTabBar {...props}/>}
      initialRouteName='Home'
      screenOptions={{ headerShown: false}}
    >
      <BottomTab.Screen
        name={'Home'}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name={'Giving'}
        component={GivingScreen}
      />
    </BottomTab.Navigator>
  )
}

export default HomeNavigator;