import React from "react";
import PlaylistListItem from "./PlaylistListItem";
import usePlaylist from "../../../hooks/use-playlist.js";

export default function PlaylistList() {
  const { playlists } = usePlaylist();

  return (
    <ul className="flex flex-col gap-2 overflow-scroll">
      {playlists.map((item, index) => (
        <PlaylistListItem key={index} item={item} number={index + 1} />
      ))}
    </ul>
  );
}
