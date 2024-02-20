const ACCESS_TOKEN = "ACCESS_TOKEN";
const SPOTIFY_TOKEN = "oauth_token";

export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const setLocalSpotifyToken = (token) =>
  localStorage.setItem(SPOTIFY_TOKEN, token);
export const getLocalSpotifyToken = () => localStorage.getItem(SPOTIFY_TOKEN);

export const setLocalDeviceId = (deviceId) =>
  localStorage.setItem("device_id", deviceId);
export const getLocalDeviceId = () => localStorage.getItem("device_id");

export const setLocalCode = (code) => localStorage.setItem("code", code);
export const getLocalCode = () => localStorage.getItem("code");
// export const removeSpotifyToken = () => localStorage.removeItem(SPOTIFY_TOKEN);
