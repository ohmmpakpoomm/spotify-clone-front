import myAPI from "../config/myAPI";

export const createPlaylist = (data) => myAPI.post("/playlists", data);

export const getPlaylists = () => myAPI.get("/playlists");

export const deletePlaylist = (playlistId) =>
  myAPI.delete(`/playlists/${playlistId}`);
