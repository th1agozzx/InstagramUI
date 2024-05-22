import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

const ChatListItem = ({ name, onPress }) => (
  <TouchableOpacity style={styles.conversationContainer} onPress={onPress}>
    <Text style={styles.conversationText}>{name}</Text>
  </TouchableOpacity>
);

ChatListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const ChatListScreen = ({ navigation }) => {
  const conversations = [
    { id: "1", name: "João" },
    { id: "2", name: "Maria" },
    { id: "3", name: "Carlos" },
    { id: "4", name: "Ana" },
    { id: "5", name: "Pedro" },
  ];

  const renderItem = ({ item }) => (
    <ChatListItem
      name={item.name}
      onPress={() => navigation.navigate("Conversa", { userName: item.name })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

ChatListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  conversationContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  conversationText: {
    fontSize: 18,
  },
});

export default ChatListScreen;
