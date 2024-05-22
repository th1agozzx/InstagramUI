<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
=======
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
>>>>>>> 672a2a84699a6c501259e03d6f3b9ac681ffeebc

export default function ChatScreen({ route }) {
  const { userName } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
<<<<<<< HEAD

  const sendMessage = () => {
    console.log('Mensagem enviada:', message);
    setMessages([...messages, message]);
    setMessage('');
=======
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: String(prevMessages.length + 1), message: inputText },
      ]);
      setInputText('');
      // Role automaticamente para baixo quando uma nova mensagem é enviada
      flatListRef.current.scrollToEnd({ animated: true });
    }
>>>>>>> 672a2a84699a6c501259e03d6f3b9ac681ffeebc
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
<<<<<<< HEAD
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.header}>{userName}</Text>
          <ScrollView style={styles.messageContainer}>
            {messages.map((msg, index) => (
              <Text key={index} style={styles.message}>{msg}</Text>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua mensagem..."
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
=======
      <Text style={styles.header}>{userName}</Text>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        )}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Digite sua mensagem..."
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={[styles.sendButton, !inputText.trim() && styles.disabledButton]}
          disabled={!inputText.trim()}
        >
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
>>>>>>> 672a2a84699a6c501259e03d6f3b9ac681ffeebc
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  header: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  message: {
    backgroundColor: '#007bff',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'black',
    backgroundColor: '#ddd',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
