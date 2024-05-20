import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa o componente de container de navegação
import { createStackNavigator } from '@react-navigation/stack'; // Importa a função para criar um navegador de pilha
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importa a função para criar um navegador de tabulação na parte inferior
import LoginScreen from '../Screens/LoginScreen'; // Importa a tela de login
import HomeScreen from '../Screens/HomeScreen'; // Importa a tela principal (Home)
import ChatListScreen from '../Screens/ChatListScreen'; // Importa a tela de lista de conversas
import ChatScreen from '../Screens/ChatScreen'; // Importa a tela de conversa
import MeuPerfil from '../Screens/MeuPerfil'; // Importa a tela de perfil
import UserDetailsScreen from '../Screens/UserDetailsScreen'; // Importa a tela de detalhes do usuário
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa o ícone da biblioteca FontAwesome

const Stack = createStackNavigator(); // Cria um navegador de pilha
const Tab = createBottomTabNavigator(); // Cria um navegador de tabulação na parte inferior

// Função que define as guias de navegação na parte inferior da tela
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Define os ícones para cada guia
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            // Define o ícone para a guia Home
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Perfil') {
            // Define o ícone para a guia Perfil
            iconName = focused ? 'user' : 'user-o';
          } else if (route.name === 'Minhas Conversas') {
            // Define o ícone para a guia Minhas Conversas
            iconName = focused ? 'comments' : 'comments-o';
          }

          // Retorna o componente de ícone correspondente ao nome da rota
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      // Define as opções da barra de navegação na parte inferior
      tabBarOptions={{
        // Cor do ícone ativo
        activeTintColor: 'blue',
        // Cor do ícone inativo
        inactiveTintColor: 'gray',
        // Estilo da barra de navegação
        style: {
          display: 'flex', // Adiciona display flex como sugerido no aviso
        },
      }}>
      {/* Define as telas das guias */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={MeuPerfil} />
      <Tab.Screen name="Minhas Conversas" component={ChatListScreen} />
    </Tab.Navigator>
  );
}

// Componente principal que envolve toda a navegação da aplicação
export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* Navegador de pilha que define as telas da aplicação */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Define a tela de login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Define as guias de navegação na parte inferior da tela */}
        <Stack.Screen name="Home" component={HomeTabs} />
        {/* Define a tela de conversa */}
        <Stack.Screen name="Conversa" component={ChatScreen} />
        {/* Define a tela de detalhes do usuário */}
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
