import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from '../../data/data.json'; // adjust path if needed

const HomeScreen = () => {
  const navigation = useNavigation();
  const profile = data.profile;

  return (
    <ScrollView style={styles.container}>
      {/* Banner Section */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {data.homeScreen.banner.map((bannerUrl, index) => (
          <Image
            key={index}
            source={{ uri: bannerUrl }}
            style={styles.banner}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <Text style={styles.shopName}>{profile.shopName}</Text>
          <Text style={styles.shopUrl}>{profile.shopUrl}</Text>
          <Text style={styles.location}>{profile.location}</Text>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryGrid}>
          {data.homeScreen.categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={styles.categoryItem}
              onPress={() => navigation.navigate('Products', { category: cat.name })}
              activeOpacity={0.8}
            >
              <Image source={{ uri: cat.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  banner: {
    width: 400,
    height: 200,
    borderRadius: 12,
    margin: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  shopName: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  shopUrl: {
    fontSize: 14,
    color: '#1E90FF',
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
  categoryContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 10,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});
