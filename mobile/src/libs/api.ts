import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.64:3333',
  timeout: 1000,
});
