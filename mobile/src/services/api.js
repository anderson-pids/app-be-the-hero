import axios from 'axios';

// baseURL baseado no ip que o expo apresenta na pagina de qrcode (execucao via mobile)
const api = axios.create({
    baseURL: 'http://192.168.0.114:3333'
});

export default api;