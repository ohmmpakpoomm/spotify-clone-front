import React from "react";
import usePlaylist from "../../../hooks/use-playlist";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Music } from "lucide-react";

export default function PlaylistContentHeader() {
  const { getPlaylistById } = usePlaylist();
  const playlistId = useLocation().pathname.slice(10);
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const playlist = await getPlaylistById(playlistId);
        setPlaylist(playlist.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="h-[27%] w-full flex">
      <div className="h-hull w-full flex gap-8">
        {playlist?.playlistImage ? (
          <img
            src={playlist?.playlistImage}
            className="rounded-sm h-full aspect-square"
          />
        ) : (
          <div className=" h-full aspect-square border border-gray03 rounded-sm flex items-center justify-center">
            <Music />
          </div>
        )}
        <div className="text-white flex flex-col justify-center">
          <small className=" font-extralight">Playlist</small>
          <span className=" text-[84px] font-bold">{playlist?.name}</span>
        </div>
      </div>
    </div>
  );
}
