import { createContext } from "react";
import * as spotifyApi from "../../../apis/spotify";
import * as playlistApi from "../../../apis/playlist";
import { useEffect } from "react";
import { setLocalSpotifyToken } from "../../../utils/local-storage";
import { useState } from "react";

export const PlaylistContext = createContext();

export default function PlaylistContextProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchSpotifyToken = async () => {
      try {
        const res = await spotifyApi.getSpotifyToken();
        setLocalSpotifyToken(res.access_token);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSpotifyToken();
  }, []);

  useEffect(() => {
    getPlaylists();
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
  return (
    <PlaylistContext.Provider
      value={{
        searchTrack,
        searchResult,
        createPlaylist,
        playlists,
        deletePlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
