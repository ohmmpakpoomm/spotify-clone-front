const ACCESS_TOKEN = "ACCESS_TOKEN";
const SPOTIFY_TOKEN = "oauth_token";

// MyApp Token
export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeToken = () => localStorage.removeItem(ACCESS_TOKEN);

// Spotify Authorization Code
export const setLocalCode = (code) => localStorage.setItem("code", code);
export const getLocalCode = () => localStorage.getItem("code");
export const removeLocalCode = () => localStorage.removeItem("code");

// Spotify OAuth2.0 Token
export const setLocalSpotifyToken = (token) =>
  localStorage.setItem(SPOTIFY_TOKEN, token);
export const getLocalSpotifyToken = () => localStorage.getItem(SPOTIFY_TOKEN);
export const removeSpotifyToken = () => localStorage.removeItem(SPOTIFY_TOKEN);

// Spotify Player Device Id
export const setLocalDeviceId = (deviceId) =>
  localStorage.setItem("device_id", deviceId);
export const getLocalDeviceId = () => localStorage.getItem("device_id");
export const removeLocalDeviceId = () => localStorage.removeItem("device_id");
