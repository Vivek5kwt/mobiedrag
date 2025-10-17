import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import data from '../../data/data.json';

export default function ProfileScreen() {
  const profile = data.profile;

  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.email}>{profile.email}</Text>
      <Text style={styles.shopName}>{profile.shopName}</Text>
      <Text style={styles.location}>{profile.location}</Text>

      <Text style={styles.shopLink} onPress={() => Linking.openURL(profile.shopUrl)}>
        Visit Shop
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6', padding: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
  email: { fontSize: 16, color: '#555', marginBottom: 6 },
  shopName: { fontSize: 18, fontWeight: '600', marginBottom: 6 },
  location: { fontSize: 16, color: '#777', marginBottom: 10 },
  shopLink: { fontSize: 16, color: '#4F46E5', textDecorationLine: 'underline', marginTop: 10 }
});
