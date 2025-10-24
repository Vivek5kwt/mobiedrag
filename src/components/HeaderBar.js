import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { wp, hp } from '../utils/responsive';


export default function HeaderBar({ leftIcon = 'menu', rightImage }) {
return (
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp(4), marginTop: hp(2) }}>
<TouchableOpacity>
<Icon name={leftIcon} size={26} />
</TouchableOpacity>
<Image source={{ uri: rightImage }} style={{ width: wp(12), height: wp(12), borderRadius: wp(6), borderWidth: 2 }} />
</View>
);
}