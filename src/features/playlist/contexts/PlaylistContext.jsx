import { createContext } from "react";
import * as spotifyApi from "../../../apis/spotify";
import { useEffect } from "react";
import { setLocalSpotifyToken } from "../../../utils/local-storage";
import { useState } from "react";

export const PlaylistContext = createContext();

export default function PlaylistContextProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchSpotifyToken = async () => {
      try {
        const res = await spotifyApi.getSpotifyToken();
        setLocalSpotifyToken(res.access_token);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSpotifyToken();
  }, []);

  const searchTrack = async (input) => {
    try {
      const res = await spotifyApi.searchTrack(input);
      console.log(res.data.tracks.items);
      setSearchResult(res.data.tracks.items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PlaylistContext.Provider value={{ searchTrack, searchResult }}>
      {children}
    </PlaylistContext.Provider>
  );
}
