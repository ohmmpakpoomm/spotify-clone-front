import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as spotifyAPI from "../../../apis/spotify";
import { getLocalSpotifyToken } from "../../../utils/local-storage";

export default function Player(props) {
  const [player, setPlayer] = useState(undefined);
  let token = getLocalSpotifyToken();

  setTimeout(() => {
    token = getLocalSpotifyToken();
  }, 1000);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 1,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, [token]);

  return (
    <>
      <div className="h-[10vh] text-white">Player</div>
    </>
  );
}
