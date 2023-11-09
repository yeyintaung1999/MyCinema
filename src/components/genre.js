import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const Genre = ({value}) => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 16}}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#766993',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Genre;