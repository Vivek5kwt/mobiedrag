import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { wp, hp } from '../../utils/responsive';


export default function ProductCard({ item }) {
return (
<View style={{ width: '48%', backgroundColor: '#fff', borderRadius: wp(3), marginBottom: hp(2), overflow: 'hidden', elevation: 2 }}>
<View style={{ position: 'relative' }}>
<Image source={{ uri: item.image }} style={{ width: '100%', height: hp(20), resizeMode: 'cover' }} />
<TouchableOpacity style={{ position: 'absolute', right: wp(2), top: wp(2), backgroundColor: 'rgba(255,255,255,0.9)', padding: wp(1.2), borderRadius: wp(6) }}>
<Icon name={item.isFav ? 'heart' : 'heart-outline'} size={18} />
</TouchableOpacity>
</View>
<View style={{ padding: wp(3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
<Text style={{ fontSize: wp(3.6), flex: 1 }} numberOfLines={1}>{item.title}</Text>
<View style={{ backgroundColor: '#000', paddingHorizontal: wp(2), paddingVertical: hp(0.6), borderRadius: wp(6) }}>
<Text style={{ color: '#fff', fontSize: wp(3) }}>${item.price}</Text>
</View>
</View>
</View>
);
}