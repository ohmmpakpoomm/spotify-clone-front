import { createContext } from "react";
import * as spotifyApi from "../../../apis/spotify";
import { useEffect } from "react";

export const PlaylistContext = createContext();

export default function PlaylistContextProvider({ children }) {
  useEffect(() => {
    const fetchSpotifyToken = async () => {
      try {
        const res = await spotifyApi.getSpotifyToken();
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
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PlaylistContext.Provider value={{ searchTrack }}>
      {children}
    </PlaylistContext.Provider>
  );
}
