import React, {useState, useEffect}  from "react";
import {View,Text, StyleSheet, FlatList, Image, ScrollView, ActivityIndicator} from 'react-native';

import Poster from "../components/poster";
import useResults from "../hook/useResults";

const MainScreen = (props) => {

    const [popular, latest] = useResults()

    if (!popular.length) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color='#7758B7'></ActivityIndicator>
            </View>
        )
    }

    if (!latest.length) {
        return null
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginTop: 150}}>
            <View style={styles.titleContainer}>
            <View style={styles.titleobj}><Text style={styles.title}>NOW ON THEATRE</Text></View>
            {/* <View style={{width: 200, height: 20, backgroundColor: 'red'}}></View> */}
            </View>
            <FlatList
                style={{shadowColor: '#7758B7', shadowOpacity: 1}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={popular}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>{
                    return <Poster movie={item} nav={props.navigation}/>
                }}
            />
            <View style={styles.titleobj}><Text style={styles.title}>TOP RATED FILMS</Text></View>
            <FlatList
                style={{shadowColor: '#7758B7', shadowOpacity: 1}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={latest}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>{
                    return <Poster movie={item} nav={props.navigation}/> 
                }}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 10,
        color: 'white',
    },
    titleobj: {
        shadowColor: '#7758B7',
        shadowOpacity: 1.0,
        shadowOffset: 1.0
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default MainScreen;