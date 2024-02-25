import axios from 'axios';

export const apiUsers = axios.create({
  baseURL: 'https://dummyjson.com/users',
});
