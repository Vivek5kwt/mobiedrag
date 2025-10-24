import React from 'react';
import { View, Text } from 'react-native';
import { wp, hp } from '../../utils/responsive';
export default function CartScreen() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text style={{ fontSize: wp(4) }}>Your Cart is Empty</Text>
</View>
);
}