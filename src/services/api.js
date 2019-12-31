import axios from 'axios';

const api = axios.create({
  baseURL: 'http://trampos.co/api',
})

export default api;