import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { log } from '../../utils/logger';
import data from '../../data/data.json';

export default function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    log('Fetching products...');
    setProducts(data.productScreen.products);
  }, []);

  const addToCart = (product) => {
    // Increment product cartCount
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, cartCount: p.cartCount + 1 } : p
    );
    setProducts(updatedProducts);

    // Update cart array
    const existing = cart.find((c) => c.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((c) =>
        c.id === product.id ? { ...c, cartCount: c.cartCount + 1 } : c
      );
    } else {
      updatedCart = [...cart, { ...product, cartCount: 1 }];
    }
    setCart(updatedCart);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>

      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      {item.cartCount > 0 && (
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>{item.cartCount}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#F3F4F6' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 16 },
  listContainer: { paddingBottom: 20 },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    position: 'relative'
  },
  productImage: { width: 100, height: 100, borderRadius: 10, marginBottom: 10 },
  productTitle: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
  productPrice: { fontSize: 14, fontWeight: 'bold', color: '#4F46E5', marginTop: 4 },
  addButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  cartBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'red',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartBadgeText: { color: '#fff', fontWeight: 'bold' }
});
