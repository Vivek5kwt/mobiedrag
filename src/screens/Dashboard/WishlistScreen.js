import React from 'react';
import { View, Text } from 'react-native';
import { wp } from '../../utils/responsive';
export default function WishlistScreen() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text style={{ fontSize: wp(4) }}>Wishlist Items</Text>
</View>
);
}