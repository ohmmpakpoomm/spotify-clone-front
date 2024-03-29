import React from "react";
import usePlaylist from "../../../hooks/use-playlist.js";
import PlaylistCardItem from "./PlaylistCardItem.jsx";

export default function PlaylistCard() {
  const { playlists } = usePlaylist();

  return (
    <div className="h-[92%] w-full">
      <ul className="flex gap-8 overflow-scroll px-8 flex-wrap">
        {playlists.map((item, index) => (
          <PlaylistCardItem key={index} item={item} number={index + 1} />
        ))}
      </ul>
    </div>
  );
}
