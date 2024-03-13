import axios from "axios";

const baseURL: string = "http://www.omdbapi.com";

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
