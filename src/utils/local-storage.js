const ACCESS_TOKEN = "ACCESS_TOKEN";
const SPOTIFY_TOKEN = "SPOTIFY_TOKEN";

export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const setLocalSpotifyToken = (token) =>
  localStorage.setItem(SPOTIFY_TOKEN, token);
export const getLocalSpotifyToken = () => localStorage.getItem(SPOTIFY_TOKEN);
