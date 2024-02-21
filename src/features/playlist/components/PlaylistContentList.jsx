import React from "react";
import { Clock3 } from "lucide-react";
import PlaylistContentListItem from "./PlaylistContentListItem";
import usePlaylist from "../../../hooks/use-playlist";
import { Play } from "lucide-react";

export default function PlaylistContentList({ trackList }) {
  const items = trackList.map((obj, index) => obj.uri);
  const { playTrack } = usePlaylist();
  return (
    <ul className="w-full h-[65%] overflow-scroll py-2">
      <div className="w-full py-2 px-4">
        <button
          onClick={() => playTrack(items)}
          className=" bg-green text-gray004 w-12 h-12 rounded-full flex justify-center items-center"
        >
          <Play fill="black" />
        </button>
      </div>
      <div className="w-full h-[36px] px-4 flex items-center gap-4 font-extralight text-sm">
        <div className="w-4 flex justify-end">
          <span className="text-gray05">#</span>
        </div>
        <div className="flex-1">
          <span className="text-gray05">Title</span>
        </div>
        <div className="flex-1">
          <span className="text-gray05">Album</span>
        </div>
        <div className="w-6 flex justify-end">
          <span className="text-gray05">
            <Clock3 size={16} />
          </span>
        </div>
        <div className="w-4"></div>
      </div>
      <hr className="text-gray02 pb-2" />
      {trackList &&
        trackList.map((item, index) => (
          <PlaylistContentListItem key={index} item={item} number={index + 1} />
        ))}
    </ul>
  );
}
