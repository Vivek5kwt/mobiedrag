import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { wp, hp } from '../utils/responsive';


export default function SearchBar({ placeholder = 'Search' }) {
return (
<View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
<View style={{ flex: 1, height: hp(6), borderRadius: wp(3), backgroundColor: '#fff', justifyContent: 'center', paddingHorizontal: wp(3), elevation: 2 }}>
<TextInput placeholder={placeholder} style={{ fontSize: wp(4) }} />
</View>
<TouchableOpacity style={{ marginLeft: wp(3), backgroundColor: '#7B2BE8', width: wp(12), height: hp(6), borderRadius: wp(3), alignItems: 'center', justifyContent: 'center' }}>
<Icon name="magnify" size={22} color="#fff" />
</TouchableOpacity>
</View>
);
}