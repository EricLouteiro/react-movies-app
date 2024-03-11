import axios from "axios";

const baseURL: string = import.meta.env.VITE_EXTERNAL_API;

const moviesApi = axios.create({
  baseURL,
});

moviesApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: import.meta.env.VITE_API_KEY,
  };
  return config;
});

export default moviesApi;
