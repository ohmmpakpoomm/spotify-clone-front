import React from "react";
import usePlaylist from "../../../hooks/use-playlist.js";
import { Minus, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PlaylistListItem({ item, number }) {
  const { name, playlistImage, id } = item;

  const { deletePlaylist } = usePlaylist();
  const navigate = useNavigate();

  return (
    <li>
      <Link
        role="button"
        className="group h-16 p-2 gap-4 rounded-md bg-gray012 flex items-center hover:bg-gray02 transition-[300ms]"
        to={`/playlist/${id}`}
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
          <span className="text-sm">Playlist</span>
        </div>
        <Minus
          size={16}
          className="hidden hover:text-white group-hover:block"
          onClick={() => {
            deletePlaylist(id);
            navigate(-1);
          }}
        />
      </Link>
    </li>
  );
}
