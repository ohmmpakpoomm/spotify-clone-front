import { createContext } from "react";
import * as spotifyApi from "../../../apis/spotify";
import * as playlistApi from "../../../apis/playlist";
import * as trackApi from "../../../apis/track";
import {
  getLocalSpotifyToken,
  setLocalSpotifyToken,
} from "../../../utils/local-storage";
import { useState } from "react";
import { data } from "autoprefixer";
import { useSpotifyLoginOAuth } from "../../../hooks/use-spotify-login-oauth";
import { useEffect } from "react";

export const PlaylistContext = createContext();

export default function PlaylistContextProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const [playlists, setPlaylists] = useState([]);

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
      await trackApi.addTrack(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTrackToPlaylist = async (playlistId, trackId) => {
    try {
      await addTrack(data);
      await playlistApi.addTrackToPlaylist(playlistId, trackId);
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
        playTrack,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
