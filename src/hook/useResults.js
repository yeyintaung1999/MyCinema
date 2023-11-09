import apimanager from "../api/apimanager";
import React, {useState, useEffect} from "react";

export default () => {

    const [popular, setPopular] = useState([]);
    const [latest, setLatest] = useState([]);


    const getPopular = async () => {
        try {
            const response = await apimanager.get('/movie/popular?language=en-US&page=1&region=<string>&api_key=56f3954b40d71ce44ec90422db48e552');
            setPopular(response.data.results)
        }catch (error) {
            console.log(error)
        }
    }

    const getLatest = async () => {
        try{
            const response = await apimanager.get('/movie/top_rated?language=en-US&page=1&region=<string>&api_key=56f3954b40d71ce44ec90422db48e552');
            setLatest(response.data.results)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getPopular()
        getLatest()
    }, [])

    return [popular, latest]
}

