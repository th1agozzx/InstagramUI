import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const conversations = [
  { id: '1', name: 'João' },
  { id: '2', name: 'Maria' },
  { id: '3', name: 'Carlos' },
  { id: '4', name: 'Ana' },
  { id: '5', name: 'Pedro' },
];

export default function ChatListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.conversationContainer}
            onPress={() => navigation.navigate('Conversa', { userName: item.name })}
          >
            <Text style={styles.conversationText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  conversationContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  conversationText: {
    fontSize: 18,
  },
});
