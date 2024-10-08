import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Image, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";


const authenticate = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "usuario@2024" && password === "1234") {
        resolve("Successo");
      } else {
        reject("Email ou senha invalidos.");
      }
    }, 1000);
  });
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

 
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handleLogin = async () => {
    setLoading(true); 
    try {
      await authenticate(email, password);
      navigation.navigate("MainHome");
    } catch (error) {
      Alert.alert("Erro de login!", error);
    } finally {
      setLoading(false);
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
