import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import SearchBar from '../../components/SearchBar';
import CategoryTabs from '../../components/CategoryTabs';
import ProductGrid from '../Dashboard/ProductGrid';
import ui from '../../data/data.json';
import { wp, hp } from '../../utils/responsive';
import SafeAreaWrapper from '../../components/SafeAreaWrapper'

export default function HomeScreen() {
const home = ui.screens.find((s) => s.screenId === 'home_screen');
const headerSection = home.sections.find((sec) => sec.type === 'header');
const categorySection = home.sections.find((sec) => sec.type === 'categoryTabs');
const productGridSection = home.sections.find((sec) => sec.type === 'productGrid');


return (
    <SafeAreaWrapper backgroundColor="#f8f8f8" barStyle="dark-content">
<View style={{ flex: 1,backgroundColor: home.backgroundColor }}>
<StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
<ScrollView showsVerticalScrollIndicator={false}>
<HeaderBar leftIcon={headerSection.props.leftIcon} rightImage={headerSection.props.rightImage} />
<View style={{ paddingHorizontal: wp(4), marginTop: hp(2) }}>
<Text style={{ fontSize: wp(6), fontWeight: '700' }}>{home.sections[1].props.text.split('\n')[0]}</Text>
<Text style={{ fontSize: wp(5), fontWeight: '700', marginTop: hp(0.5) }}>{home.sections[1].props.text.split('\n')[1]}</Text>
</View>


<SearchBar placeholder={home.sections.find((s) => s.type === 'searchBar').props.placeholder} />


<CategoryTabs tabs={categorySection.props.tabs} activeTab={categorySection.props.activeTab} />


<View style={{ paddingHorizontal: wp(4), marginTop: hp(2) }}>
<Text style={{ fontSize: wp(5), fontWeight: '700', marginBottom: hp(1) }}>Popular</Text>
</View>


<ProductGrid products={productGridSection.props.products} columns={productGridSection.props.columns} />


</ScrollView>
</View>
</SafeAreaWrapper>
);
}