import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
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
    flex: 1, // Usa todo o espaço disponível no pai (flexível)
    backgroundColor: "#f9f9f9",   // Define a cor de fundo como um cinza claro
    padding: 10,  // Adiciona um preenchimento interno de 10 unidades em todas as direções
},
conversationContainer: {
    padding: 15, // Adiciona um preenchimento interno de 15 unidades em todas as direções
    backgroundColor: "#fff", // Define a cor de fundo como branco
    borderRadius: 5, // Define o raio do canto das bordas como 5 unidades, arredondando as bordas
    marginVertical: 5, // Adiciona uma margem vertical de 5 unidades (espaço entre os elementos)
    shadowColor: "#000", // Define a cor da sombra como preto
    shadowOffset: { width: 0, height: 2 }, // Define o deslocamento da sombra
    shadowOpacity: 0.1, // Define a opacidade da sombra como 0.1
    shadowRadius: 5, // Define o raio da sombra como 5 unidades
    elevation: 3, // Define a elevação (altura) da sombra em relação ao plano z
},
conversationText: {
    fontSize: 18, // Define o tamanho da fonte como 18 unidades
},
});

export default ChatListScreen;
