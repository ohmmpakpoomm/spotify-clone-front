import { createContext, useState, useEffect } from "react";
import * as spotifyApi from "../../../apis/spotify";
import * as playlistApi from "../../../apis/playlist";
import * as trackApi from "../../../apis/track";
import { useSpotifyLoginOAuth } from "../../../hooks/use-spotify-login-oauth";

export const PlaylistContext = createContext();

export default function PlaylistContextProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [trackList, setTrackList] = useState([]);

  useSpotifyLoginOAuth();
  useEffect(() => {
    getPlaylists();
    localStorage.removeItem("code_verifier");
  }, []);

  const searchTrack = async (input) => {
    try {
      const res = await spotifyApi.searchTrack(input);
      setSearchResult(res.data.tracks.items);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlaylists = async () => {
    try {
      const res = await playlistApi.getPlaylists();
      setPlaylists(res.data.playlists);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlaylistById = async (id) => {
    try {
      const res = await playlistApi.getPlaylistById(id);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const getTrackList = async (id) => {
    try {
      const res = await playlistApi.getPlaylistList(id);
      setTrackList(res.data);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const createPlaylist = async (input) => {
    try {
      await playlistApi.createPlaylist(input);
      await getPlaylists();
    } catch (err) {
      console.log(err);
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      await playlistApi.deletePlaylist(playlistId);
      await getPlaylists();
    } catch (err) {
      console.log(err);
    }
  };

  const addTrack = async (data) => {
    try {
      const id = await trackApi.addTrack(data);
      return id;
    } catch (err) {
      console.log(err);
    }
  };

  const addTrackToPlaylist = async (playlistId, trackData) => {
    try {
      const trackId = await addTrack(trackData);
      await playlistApi.addTrackToPlaylist(playlistId, trackId);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteTrackInPlaylist = async (playlistId, trackId) => {
    try {
      await playlistApi.deleteTrackInPlaylist(playlistId, trackId);
      await getTrackList(playlistId);
    } catch (err) {
      console.log(err);
    }
  };

  const changePlaylistInfo = async (playlistId, data) => {
    try {
      await playlistApi.changePlaylistInfo(playlistId, data);
      await getPlaylists();
    } catch (err) {
      console.log(err);
    }
  };

  const playTrack = async (uri) => {
    try {
      await spotifyApi.startTrack(uri);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PlaylistContext.Provider
      value={{
        searchTrack,
        searchResult,
        createPlaylist,
        playlists,
        deletePlaylist,
        addTrackToPlaylist,
        deleteTrackInPlaylist,
        playTrack,
        getTrackList,
        trackList,
        getPlaylistById,
        changePlaylistInfo,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
