import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function UserDetailsScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={user.avatarUrl} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>
      </View>
      <FlatList
        data={user.posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.imageUrl} style={styles.postImage} />
        )}
        numColumns={3}
        style={styles.postsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  postsContainer: {
    marginTop: 10,
  },
  postImage: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    margin: 1,
  },
});
