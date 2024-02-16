import React from "react";
import usePlaylist from "../../../hooks/use-playlist.js";
import TrackListItem from "./TrackListItem.jsx";
import { Clock3 } from "lucide-react";

export default function TrackList() {
  const { searchResult } = usePlaylist();

  return (
    <ul className="w-full h-[92%] overflow-scroll py-2">
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
      {searchResult.map((item, index) => (
        <TrackListItem key={index} item={item} number={index + 1} />
      ))}
    </ul>
  );
}
