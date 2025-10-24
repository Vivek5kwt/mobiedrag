import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer>
                    <BottomTabsNavigator />
                </NavigationContainer>
        </GestureHandlerRootView>

    );
}