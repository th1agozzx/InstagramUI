import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Spacer from '../src/components/Spacer';
import TouchableButton from '../src/components/TouchableButton';
import { FlatList } from 'react-native-gesture-handler';

const MeuPerfil = (props) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Image 
                    style={styles.profileImage}
                    source={require('../assets/image/Logo1.png')} 
                />
                <View style={styles.infoContainer}>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoNumber}>0</Text>
                        <Text style={styles.infoLabel}>publicações</Text>
                    </View>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoNumber}>1M</Text>
                        <Text style={styles.infoLabel}>seguidores</Text>
                    </View>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoNumber}>0</Text>
                        <Text style={styles.infoLabel}>seguindo</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.username}>Robinho</Text>
            <TouchableButton title={'Editar Perfil'}/>
            <TouchableButton title={'Compartilhar Perfil'}/>
            <Text
            style={{
                fontSize: 18,
                color: 'black',
                paddingHorizontal: 10,
                marginTop: 10,
                fontWeight: 'bold',
                marginBottom: 20,
            }}>Feed</Text>
            <View style={{borderWidth:StyleSheet.hairlineWidth, borderColor: 'black'}}/>

            {/* Adicionando as fotos abaixo do Feed */}
            <ScrollView horizontal={true} style={styles.photoContainer}>
                <Image 
                    style={styles.headerImage}
                    source={require('../assets/image/photo1.png')} 
                />
                <Image 
                    style={styles.headerImage}
                    source={require('../assets/image/photo1.png')} 
                />
                <Image 
                    style={styles.headerImage}
                    source={require('../assets/image/photo1.png')} 
                />
            </ScrollView>
        </View>
    );
};

export default MeuPerfil;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
    },
    headerImage:{
        width: 120,
        height: 120,
        marginHorizontal: 5.6,
        marginTop: 4,
    },

    profileImage: {
        height: 60,
        width: 60,
        backgroundColor: 'grey',
        borderRadius: 50,
    },
    infoContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    infoBlock: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    infoNumber: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    infoLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'grey',
    },
    username: {
        fontSize: 18,
        color: 'black',
        paddingHorizontal: 10,
        marginTop: 4,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    photoContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
});
