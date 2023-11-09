import axios from "axios";

const apikey = '56f3954b40d71ce44ec90422db48e552';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});