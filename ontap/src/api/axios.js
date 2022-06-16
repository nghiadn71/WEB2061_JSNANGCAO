import axios from 'axios';
const apiAxios = axios.create({
    baseURL: 'https://62aaf002a62365888bd027e1.mockapi.io'
});

export default apiAxios;