import axios from 'axios';

const api = axios.create({
  baseURL: 'https://trampos.co/api',
})

export default api;
