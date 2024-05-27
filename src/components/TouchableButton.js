import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const TouchableButton = ({ title, onPress, icon }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {icon && <View style={styles.iconContainer}>{icon}</View>}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0060f6', // Define a cor de fundo do botão
        paddingVertical: 5, // Adiciona preenchimento vertical (topo e base) de 5 unidades
        paddingHorizontal: 30, // Adiciona preenchimento horizontal (esquerda e direita) de 30 unidades
        borderRadius: 20, // Deixa as bordas do botão arredondadas com um raio de 20 unidades
        alignItems: 'center', // Centraliza o conteúdo do botão horizontalmente
        marginVertical: 8, // Adiciona margem vertical (topo e base) de 8 unidades
        marginRight: 25, // Adiciona margem à direita de 25 unidades
        flexDirection: 'row', // Para alinhar o ícone e o texto horizontalmente
    },
    buttonText: {
        color: 'white', // Define a cor do texto como branco
        fontWeight: 'bold', // Define o peso da fonte como negrito
        fontSize: 12,  // Define o tamanho da fonte como 12 unidades
        marginLeft: 4, // Adiciona uma margem à esquerda de 4 unidades, criando espaço entre o ícone e o texto
    },
});

export default TouchableButton;
