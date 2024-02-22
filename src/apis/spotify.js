import spotifyAPI from "../config/spotifyAPI";
import {
  getLocalDeviceId,
  getLocalSpotifyToken,
  setLocalDeviceId,
} from "../utils/local-storage";

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

export const startTrack = (uri) => {
  const device_id = getLocalDeviceId();
  return spotifyAPI.put(`/me/player/play?device_id=${device_id}`, {
    uris: uri,
  });
};
