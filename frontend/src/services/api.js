import axios from 'axios';

const api = axios.create({
    baseURL: 'https://covid-inspector.herokuapp.com'
});

export default api;