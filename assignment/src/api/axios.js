import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'https://6291d18fcd0c91932b687714.mockapi.io'
});

export default apiAxios;