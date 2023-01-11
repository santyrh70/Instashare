import axios from 'axios';

export const pexelsApiAxios = axios.create({
  baseURL: 'https://api.pexels.com/v1'
});