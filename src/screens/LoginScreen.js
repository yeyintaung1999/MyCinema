import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View,Text, StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const dimension = Dimensions.get('screen');

const LoginScreen = () => {

    const navigation = useNavigation()

    function navigate() {
        navigation.navigate('Home');
    }

    function onclickSignIn(){
        if(true){
            navigate()
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={{
                    width: 300, 
                    height: 200, 
                    borderWidth: 1, 
                    borderColor: 'white', 
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                <FontAwesome5 name="film" size={94} color="violet" />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>MYCINEMA</Text>
                </View>
            </View>
            <View style={styles.loginContainer}>
                    <Text style={{
                        fontSize: 42,
                        fontWeight: "bold",
                        color: '#7758B7'
                    }}>Login</Text>
                    <TextInput style={{
                        paddingHorizontal: 25,
                        marginTop: 40,
                        height: 50,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 25
                    }} placeholder="Username"></TextInput>
                    <TextInput style={{
                        paddingHorizontal: 25,
                        marginTop: 20,
                        height: 50,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 25
                    }} placeholder="Password"></TextInput>
                    <TouchableOpacity
                    style={{
                        paddingHorizontal: 25,
                        marginTop: 20,
                        height: 50,
                        backgroundColor: '#7758B7',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={()=>onclickSignIn()}
                    >
                        <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                        >Sign In</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container1: {
        backgroundColor: 'gray',
        borderRadius: 30,
        height: dimension.height*0.5,
        width: dimension.width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    loginContainer: {
        marginTop: 30,
        marginHorizontal: 50,
        flexDirection: "column",
        justifyContent: "center"
    }
});

export default LoginScreen;