import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f81afd5e8f0e89d9c3ffa0c2e258e138',
        language: 'es-ES'
    }
})

export default movieDB;