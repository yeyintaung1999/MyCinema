import React from "react";
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';


const LaunchScreen = ({navigation}) => {

    function navigate() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={{marginTop: 200}}>
                <Text style={styles.text1}>JOY WITH</Text>
                <Text style={styles.text2}>MYCINEMA</Text>
            </View>
            <TouchableOpacity onPress={()=>navigate()}>
                <View style={styles.button}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>GET STARTED!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text1: {
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#BCADDA'
    },
    text2:{
        fontSize: 64,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#7758B7'
    },
    button: {
        width: 400,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#7758B7',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    }
})

export default LaunchScreen;