import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import ChatListScreen from '../Screens/ChatListScreen';
import ChatScreen from '../Screens/ChatScreen';
import MeuPerfil from '../Screens/MeuPerfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={MeuPerfil} />
      <Tab.Screen name="Minhas Conversas" component={ChatListScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Perfil" component={MeuPerfil} />
        <Stack.Screen name="Conversa" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
