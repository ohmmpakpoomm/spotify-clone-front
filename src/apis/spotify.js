import spotifyAPI from "../config/spotifyAPI";
import { getLocalSpotifyToken } from "../utils/local-storage";

export const getSpotifyToken = () => {
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const url = "https://accounts.spotify.com/api/token";

  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  };

  return fetch(url, option)
    .then((result) => result.json())
    .then((data) => data);
};

const spotifyToken = getLocalSpotifyToken();

export const searchTrack = (input) => {
  const query = {
    q: input,
    type: "track",
    market: "TH",
    limit: "50",
    offset: "0",
  };

  return spotifyAPI.get(`/search`, {
    headers: { Authorization: `Bearer ${spotifyToken}` },
    params: query,
  });
};
