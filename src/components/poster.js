import React from "react";
import { useNavigation } from '@react-navigation/native';
import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


const Poster = ({movie}) => {
    const imagebaseurl = 'https://image.tmdb.org/t/p/w500/';
    const navigation = useNavigation();

    function goDetail() {
        navigation.navigate('Detail', {
            data: {movie}
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={()=>goDetail()}>
            <Image style={{height: 270, width: 200, borderRadius: 5}} source={{uri: `${imagebaseurl}${movie.poster_path}`}}/>
            <Text style={{color: 'white', fontSize: 12, marginBottom: 10}}>{movie.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        width: 200,
        height: 300,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#7758B7',
    }
})

export default Poster;