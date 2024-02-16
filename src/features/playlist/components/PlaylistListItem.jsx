import React from "react";
import usePlaylist from "../../../hooks/use-playlist.js";
import { Minus, Music } from "lucide-react";

export default function PlaylistListItem({ item, number }) {
  const { name, user, playlistImage, id } = item;

  const { deletePlaylist } = usePlaylist();

  return (
    <li>
      <div
        role="button"
        className="h-16 p-2 gap-4 rounded-md bg-gray012 flex items-center hover:bg-gray03"
      >
        {playlistImage ? (
          <img src={playlistImage} className="rounded-sm w-11 h-11" />
        ) : (
          <div className="w-11 h-11 border border-gray03 rounded-sm flex items-center justify-center">
            <Music />
          </div>
        )}
        <div className="flex flex-col flex-1">
          <span className="text-white">{name}</span>
          <span className="text-sm">Playlist - {user}</span>
        </div>
        <Minus
          size={16}
          className="hover:text-white"
          onClick={() => deletePlaylist(id)}
        />
      </div>
    </li>
  );
}
