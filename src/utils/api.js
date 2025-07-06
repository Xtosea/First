import axios from 'axios';

const api = axios.create({
  baseURL: 'https://open-api.tiktok.com/',
});

export default api;
