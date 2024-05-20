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
        backgroundColor: '#0060f6',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 8,
        marginRight: 25,
        flexDirection: 'row', // Para alinhar o ícone e o texto horizontalmente
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 4, // Espaço entre o ícone e o texto
    },
});

export default TouchableButton;
