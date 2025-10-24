import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../screens/Dashboard/CartScreen';
import WishlistScreen from '../screens/Dashboard/WishlistScreen';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Dashboard/HomeScreen';


const Tab = createBottomTabNavigator();


export default function BottomTabsNavigator() {
return (
<Tab.Navigator
screenOptions={({ route }) => ({
headerShown: false,
tabBarShowLabel: true,
tabBarStyle: { height: 70 },
tabBarIcon: ({ focused, color, size }) => {
let iconName = 'home';
if (route.name === 'Home') iconName = 'home';
else if (route.name === 'Cart') iconName = 'cart';
else if (route.name === 'Wishlist') iconName = 'heart-outline';
else if (route.name === 'Profile') iconName = 'account-circle-outline';
return <Icon name={iconName} size={22} />;
}
})}
>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: 2 }} />
<Tab.Screen name="Wishlist" component={WishlistScreen} />
<Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>
);
}