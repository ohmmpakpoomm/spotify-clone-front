import React, { useEffect } from "react";
import usePlaylist from "../../../hooks/use-playlist.js";
import { Music, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function PlaylistCardItem({ item, number }) {
  const { name, playlistImage, id } = item;

  const { playTrack, trackList, getTrackList } = usePlaylist();
  const items = trackList.map((obj, index) => obj.uri);

  useEffect(() => {
    getTrackList(id);
  }, [id]);

  return (
    <li>
      <Link
        role="button"
        className="relative group p-4 gap-4 h-fit rounded-md bg-gray012 flex flex-col items-center hover:bg-gray02 transition-[300ms]"
        to={`/playlist/${id}`}
      >
        {playlistImage ? (
          <img src={playlistImage} className="rounded-sm w-11 h-11" />
        ) : (
          <div className="w-32 h-32 border border-gray03 rounded-sm flex items-center justify-center">
            <Music />
          </div>
        )}
        <div className=" absolute top-[86px] left-[80px] w-full py-2 px-4 hidden group-hover:block transition-[300ms]">
          <button
            onClick={() => playTrack(items)}
            className="bg-green text-gray004 w-10 h-10 rounded-full flex justify-center items-center hover:w-11 hover:h-11 transition-[300ms]"
          >
            <Play fill="black" />
          </button>
        </div>
        <div className="flex flex-col w-full pb-1">
          <span className="text-white text-lg">{name}</span>
          <small className="text-sm text-gray05">Playlist</small>
        </div>
      </Link>
    </li>
  );
}
