import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { wp, hp } from '../utils/responsive';


export default function CategoryTabs({ tabs = [], activeTab = 'All' }) {
return (
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: wp(4), marginTop: hp(2) }}>
{tabs.map((t, i) => {
const isActive = t.label === activeTab;
return (
<TouchableOpacity key={i} style={{ paddingVertical: hp(0.4), paddingHorizontal: wp(4), borderRadius: wp(5), borderWidth: isActive ? 0 : 1, borderColor: '#ccc', backgroundColor: isActive ? '#7B2BE8' : '#fff', marginRight: wp(3) }}>
<Text style={{ color: isActive ? '#fff' : '#000', fontSize: wp(3.6) }}>{t.label}</Text>
</TouchableOpacity>
);
})}
</ScrollView>
);
}