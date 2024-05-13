import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TouchableButton = ({ title, onPress }) => {
    return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0060f6', // Cor de fundo azul do Instagram
        paddingHorizontal: 20, // Adicionando padding horizontal
        paddingVertical: 12, // Adicionando padding vertical
        borderRadius: 25, // Reduzindo o raio da borda para ficar mais arredondado
        alignItems: 'center',
        marginVertical: 8,
        marginRight: 20,
        marginLeft: 20,
    },
        buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16, // Ajustando o tamanho da fonte
    },
});

export default TouchableButton;
