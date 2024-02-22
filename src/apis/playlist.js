import myAPI from "../config/myAPI";

export const createPlaylist = (data) => myAPI.post("/playlists", data);

export const getPlaylists = () => myAPI.get("/playlists");

export const deletePlaylist = (playlistId) =>
  myAPI.delete(`/playlists/${playlistId}`);

export const addTrackToPlaylist = (playlistId, trackId) =>
  myAPI.post(`/playlists/${playlistId}`, trackId);

export const deleteTrackInPlaylist = (playlistId, trackId) =>
  myAPI.delete(`/playlists/${playlistId}/${trackId}`);

export const getPlaylistList = (playlistId) =>
  myAPI.get(`/playlists/${playlistId}`);

export const changePlaylistInfo = (playlistId, data) =>
  myAPI.patch(`/playlists/${playlistId}`, data);

export const getPlaylistById = (playlistId) =>
  myAPI.get(`/playlists/id/${playlistId}`);
