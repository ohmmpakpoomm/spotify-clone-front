import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as spotifyAPI from "../../../apis/spotify";
import {
  getLocalSpotifyToken,
  setLocalDeviceId,
} from "../../../utils/local-storage";
import { PlayCircle } from "lucide-react";
import { PauseCircle } from "lucide-react";
import { SkipForward } from "lucide-react";
import { SkipBack } from "lucide-react";

const track = {
  name: "",
  album: {
    images: [{ url: "" }],
  },
  artists: [{ name: "" }],
};
export default function Player(props) {
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);
  const [volume, setVolume] = useState(0);

  let token = "";
  setTimeout(() => {
    token = getLocalSpotifyToken();
  }, 1200);

  const createPlayer = async () => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Spotify Clone Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 1,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setLocalDeviceId(device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.getVolume().then((volume) => {
        let volume_percentage = volume * 100;
        setVolume(volume_percentage);
      });

      player.connect();
    };
  };

  useEffect(() => {
    createPlayer();
  }, [token]);

  return (
    <>
      <div className="h-[10vh] bg-gray008 text-white px-8 flex items-center justify-between">
        <div className="main-wrapper w-1/4 h-full flex items-center text-sm text-gray05 gap-4">
          <img
            src={current_track?.album.images[0].url}
            className="now-playing__cover h-2/3"
            alt=""
          />
          <div className="now-playing__side">
            <div className="now-playing__name text-white">
              {current_track?.name}
            </div>
            <div className="now-playing__artist">
              {current_track?.artists[0].name}
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center w-1/2 h-[60%]">
          <button
            className="btn-spotify"
            onClick={() => {
              player.previousTrack();
            }}
          >
            <SkipBack className=" text-gray05 hover:text-white" />
          </button>
          <button
            className="btn-spotify"
            onClick={() => {
              player.togglePlay();
            }}
          >
            {is_paused ? <PlayCircle size={36} /> : <PauseCircle size={36} />}
          </button>
          <button
            className="btn-spotify"
            onClick={() => {
              player.nextTrack();
            }}
          >
            <SkipForward className=" text-gray05 hover:text-white" />
          </button>
        </div>
        <div className="w-1/4 flex justify-end">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => {
              setVolume(e.target.valueAsNumber);
              player.setVolume(e.target.valueAsNumber / 100);
            }}
          />
        </div>
      </div>
    </>
  );
}
