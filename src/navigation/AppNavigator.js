import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import ProductScreen from '../screens/Dashboard/ ProductScreen';
import OrderScreen from '../screens/Dashboard/OrderScreen';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Orders" component={OrderScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
