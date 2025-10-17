import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3
  },
  image: { width: 120, height: 120, borderRadius: 10 },
  title: { marginTop: 10, fontWeight: 'bold', fontSize: 16 },
  price: { color: 'green', marginTop: 4 }
});
