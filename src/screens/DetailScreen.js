import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, FlatList} from 'react-native';
import { useRoute } from "@react-navigation/native";
import useGenres from "../hook/useGenres";
import Genre from "../components/genre";


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
        <ScrollView style={{backgroundColor: '#674BA1'}} >
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: `${imagebaseurl}${data.movie.backdrop_path}`}}/>
            <View style={styles.detail}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 22, fontWeight: 'bold', marginTop: 10}}>{data.movie.original_title}</Text>
                <Text style={{color: '#BFB8CF', marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>Release on: {data.movie.release_date}</Text>
            </View>
            <View style={{marginTop: 20}}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={getGenres(data.movie.genre_ids)}
                    keyExtractor={(item)=>item}
                    renderItem={({item})=>{
                        return <Genre value={item}/>
                    }}  
                />
            </View>
            <View>
                <Text style={{color: '#BFB8CF', fontSize: 16, fontWeight: 'bold', marginTop: 20, marginHorizontal: 10}}>Summary</Text>
                <Text style={{color: 'black',lineHeight: 20, marginTop: 20, marginHorizontal: 10}}>{data.movie.overview}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'white',
        alignItems: 'stretch',
        
    },
    image: {
        height: 200
    },
    detail: {
        
        alignItems: 'center'
    }
});

export default DetailScreen;