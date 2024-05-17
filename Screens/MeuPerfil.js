import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,TouchableHighlight} from 'react-native'
import Spacer from '../src/components/Spacer';
import TouchableButton from '../src/components/TouchableButton';

const MeuPerfil = (props) => {
    return (
        <View>
            <View 
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginLeft: 10,
            }}>
                <Image 
                style={{
                    height: 60,
                    width: 60,
                    backgroundColor: 'grey',
                    borderRadius:50,
                }}
                source={require('../assets/image/Logo1.png')} />
            <View style={{marginLeft: 10,}}>
            <Text style={{ 
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black', paddingHorizontal: 25,
                marginLeft: 10,}}>0</Text>
        
            <Text style={{
                fontWeight: 'bold',
                fontSize: 16, 
                color: 'grey', 
                paddingHorizontal: 10,}}>publicações</Text>
            </View>

            <View>
            <Text style={{ 
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black', paddingHorizontal: 25,
                marginLeft: 10,}}>1M</Text>
        
            <Text style={{
                fontWeight: 'bold',
                fontSize: 16, 
                color: 'grey', 
                paddingHorizontal: 10,}}>seguidores</Text>
            </View>

            <View>
            <Text style={{ 
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black', paddingHorizontal: 25,
                marginLeft: 10,}}>0</Text>
        
            <Text style={{
                fontWeight: 'bold',
                fontSize: 16, 
                color: 'grey', 
                paddingHorizontal: 10,
                marginTop: -1,
                }}>seguindo</Text>
            </View>
            </View>

            <Text style={{fontSize: 18, 
            color: 'black', 
            paddingHorizontal: 10, 
            marginTop: 4,
            fontWeight: 'bold', 
            marginBottom: 5,
            }}>Usuário</Text>
            <TouchableButton title={'Editar Perfil'} textStyle={{color: 'black'}}/>

        <View styles={styles.container}>
        <Spacer height={10}/>
        <ScrollView>
        <Spacer height={10}/>

        <TouchableOpacity style={styles.ListItem} onPress={() => props.navigation.replace('Login')}>
            <View style={styles.listItemInnerContentView}>
            <Text style={styles.TextStyles}>Sair</Text>
            </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
    </View>
    );
};

export default MeuPerfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColors:'white',
        padding: 10,
},
    
    ListItem: {
        backgroundColor: '#f9f9f9ff',
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
},
    
    listItemInnerContentView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
},
    
    TextStyles: {
        fontSize: 15,
        color: '#676767ff',
        fontWeight: '400',
    },
})