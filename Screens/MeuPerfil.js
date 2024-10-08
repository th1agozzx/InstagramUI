import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import TouchableButton from '../src/components/TouchableButton';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa os ícones necessários

const MeuPerfil = (props) => {
    return (
        <View>
            {/* Aqui fica o cabeçalho do perfil contendo uma imagem do perfil e informações do usuário */}
            <View style={styles.headerContainer}>
                <Image 
                    style={styles.profileImage}
                    source={require('../assets/image/iconeperfil.png')} 
                />

                 {/* Aqui temos as informações de publicações, seguidores e seguindo */}
                <View style={styles.infoContainer}>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoNumber}>3</Text>
                        <Text style={styles.infoLabel}>publicações</Text>
                    </View>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoNumber}>1M</Text>
                        <Text style={styles.infoLabel}>seguidores</Text>
                    </View>
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoNumber}>157</Text>
                        <Text style={styles.infoLabel}>seguindo</Text>
                    </View>
                </View>
            </View>
               {/* O Nome do usuário */}
            <Text style={styles.username}>Robinho</Text>

            {/*Os Botões do perfil estão aqui*/}
            <View style={styles.buttonContainer}>
                <TouchableButton title={'Editar Perfil'} icon={<Icon name="create-outline" size={20} color="white" />} />
                <TouchableButton title={'Compartilhar Perfil'} icon={<Icon name="share-outline" size={20} color="white" />} />
            </View>
            
             {/* Aqui é uma linha que separa as fotos */}
            <View style={{borderWidth:StyleSheet.hairlineWidth, borderColor: 'black'}}/>

            {/* Fotos de demonstração na pagina*/}
            <ScrollView horizontal={true} style={styles.photoContainer}>
                <Image 
                    style={styles.headerImage}
                    source={require('../assets/image/foto2.png')} 
                />
                <Image 
                    style={styles.headerImage}
                    source={require('../assets/image/foto3.png')} 
                />
                <Image 
                    style={styles.headerImage}
                    source={require('../assets/image/foto1.png')} 
                />
            </ScrollView>
        </View>
    );
};
{/* Exporta o componente 'MeuPerfil' em AppNavigator*/}
export default MeuPerfil;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
    },
    headerImage:{
        width: 122,
        height: 120,
        marginHorizontal: 1,
        marginTop: 4,
        marginRight: 10,
    },

    profileImage: {
        height: 70,
        width: 70,
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 30,
    },
});
