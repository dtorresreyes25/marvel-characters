import axios, { AxiosInstance } from 'axios';

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

const httpClient: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apiKey: VITE_API_KEY,
  },
});

export default httpClient;
