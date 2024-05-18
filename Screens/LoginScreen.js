import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Image, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

// Função de autenticação
const authenticate = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "usuario@2024" && password === "1234") {
        resolve("Successo");
      } else {
        reject("Emai ou senha invalidos.");
      }
    }, 1000);
  });
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(""); // Estado para o email
  const [password, setPassword] = useState(""); // Estado para a senha
  const [loading, setLoading] = useState(false); // Estado para o carregamento
  const opacity = useSharedValue(0); // Valor compartilhado para animação

  // Efeito para animar a opacidade na montagem do componente
  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  // Estilo animado para a View
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // Função para lidar com o login
  const handleLogin = async () => {
    setLoading(true); // Ativa o estado de carregamento
    try {
      await authenticate(email, password);
      navigation.navigate("Home"); // Navega para a tela "Home" em caso de sucesso
    } catch (error) {
      Alert.alert("Erro de login!", error); // Mostra um alerta em caso de erro
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image 
          style={styles.logo}
          source={require('../assets/image/LogoInstagram.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Carregando..." : "Login"}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    marginBottom: 30,
    height: 68,
    width: 220,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
