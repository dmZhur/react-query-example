import axios from 'axios';

export const apiProducts = axios.create({
  baseURL: 'https://dummyjson.com/products',
});
