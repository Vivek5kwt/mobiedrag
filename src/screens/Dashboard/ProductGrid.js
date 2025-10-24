import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from './ProductCard';
import { wp } from '../../utils/responsive';


export default function ProductGrid({ products = [], columns = 2 }) {
return (
<FlatList
data={products}
keyExtractor={(item) => item.id}
numColumns={columns}
columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: wp(4) }}
renderItem={({ item }) => <ProductCard item={item} />}
showsVerticalScrollIndicator={false}
/>
);
}