import axios from "axios";
import { getLocalSpotifyToken } from "../utils/local-storage";

const spotifyAPI = axios.create({
  baseURL: import.meta.env.VITE_SPOTIFY_API_URL,
});

spotifyAPI.interceptors.request.use(
  (config) => {
    const token = getLocalSpotifyToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default spotifyAPI;
