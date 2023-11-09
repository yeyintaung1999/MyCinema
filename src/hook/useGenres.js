import apimanager from "../api/apimanager";
import React,{useState, useEffect} from "react";

export default () => {

    
    const [genre, setGenre] = useState([])

    const getGenres = async () => {
        try {
            const response = await apimanager.get('genre/movie/list?language=en&api_key=56f3954b40d71ce44ec90422db48e552');
            setGenre(response.data.genres)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getGenres()
    }, [])

    return [genre];
}