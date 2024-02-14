import axios from "axios";
import { setLocalSpotifyToken } from "../utils/local-storage";

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

const url = import.meta.env.VITE_SPOTIFY_API_URL;
const spotifyToken =
  "BQBof-OavNxlrgxvujVF4M-WdXSY0SYGYJS1XuDxFWctVGNhHxFsLHFM6xxVH2qXUY7SbJeANChRLWyKyrG66qJ0BT9r52Y2BK_H_sw8ognymiAK_Bg";
setLocalSpotifyToken(spotifyToken);

export const searchTrack = (input) => {
  const query = {
    q: input,
    type: "track",
    market: "TH",
    limit: "12",
    offset: "0",
  };

  return axios.get(`${url}/search`, {
    headers: { Authorization: `Bearer ${spotifyToken}` },
    params: query,
  });
};
