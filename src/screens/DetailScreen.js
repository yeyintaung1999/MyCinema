import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { useRoute } from "@react-navigation/native";
import useGenres from "../hook/useGenres";
import Genre from "../components/genre";

const dimension = Dimensions.get('screen')
const DetailScreen = () => {
    
    const imagebaseurl = 'https://image.tmdb.org/t/p/w500/';
    const route = useRoute()
    const {data} = route.params

    const [genre] = useGenres()

    const getGenres = (ids) => {
        const idresult = ids.map ((id) => {
            for (let i=0; i<genre.length; i++){
                if(genre[i].id===id){
                    return genre[i].name
                }
            }
        })
        return idresult
    }

    return (
        // <ScrollView style={{backgroundColor: '#674BA1'}} >
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: `${imagebaseurl}${data.movie.backdrop_path}`}}/>
            <View style={{
                backgroundColor: 'white',
                height: dimension.height-290
            }}>
                <View style={styles.detail}>
                    <Text style={{color: '#674BA1', alignSelf: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 10}}>{data.movie.original_title}</Text>
                    <Text style={{color: '#BFB8CF', marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>Release on: {data.movie.release_date}</Text>
                    <Text style={{color: '#BFB8CF', marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>Rating: {data.movie.vote_average.toFixed(1)}</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={getGenres(data.movie.genre_ids)}
                        keyExtractor={(item, index)=>{return `${index}`}}
                        renderItem={({item})=>{
                            return <Genre value={item}/>
                        }}
                    />
                </View>
                <View>
                    <Text style={{color: '#BFB8CF', fontSize: 16, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>Summary</Text>
                    <Text style={{color: 'black',lineHeight: 20, marginTop: 20, marginHorizontal: 10}}>{data.movie.overview}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'red'
    },
    image: {
        height: 200
    },
    detail: {
        
        alignItems: 'center'
    },
    button:{
        width: dimension.width-40,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#674BA1',
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50
    }
});

export default DetailScreen;