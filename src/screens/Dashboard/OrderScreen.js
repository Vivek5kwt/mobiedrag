import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { log } from '../../utils/logger';
import data from '../../data/data.json';

export default function OrderScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    log('Fetching orders...');
    setOrders(data.orders);
  }, []);

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderId}>Order ID: {item.id}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Amount: ₹{item.amount}</Text>
      <Text style={[styles.status, 
        item.status === 'Delivered' ? styles.delivered : styles.pending
      ]}>
        Status: {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  listContainer: { paddingBottom: 20 },
  orderCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3
  },
  orderId: { fontWeight: 'bold', fontSize: 16 },
  status: { marginTop: 8, fontWeight: 'bold' },
  delivered: { color: 'green' },
  pending: { color: 'orange' }
});
