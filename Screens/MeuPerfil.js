import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,TouchableHighlight} from 'react-native'
import Spacer from '../src/components/Spacer';

const MeuPerfil = (props) => {
    return (
        <View>
            <View 
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginLeft: 15,
            }}>
                <Image 
                style={{
                    height: 60,
                    width: 60,
                    backgroundColor: 'grey',
                    borderRadius:50,
                }}
                source={require('../assets/image/Logo1.png')} />
            </View>
            <View>
                <Text>Teste</Text>
                <Text>Post</Text>
            </View>
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
    )
}

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