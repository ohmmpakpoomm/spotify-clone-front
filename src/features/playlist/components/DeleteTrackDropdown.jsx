import React from "react";
import usePlaylist from "../../../hooks/use-playlist";
import { useLocation } from "react-router-dom";

export default function DeleteTrackDropdown({ trackId, setIsOpen }) {
  const playlistId = useLocation().pathname.slice(10);
  const { deleteTrackInPlaylist } = usePlaylist();

  return (
    <div className="relative">
      <div className="absolute w-[200px] text-sm font-light bg-gray02 shadow-[0_0_15px_rgb(0,0,0,0.4)] p-2 rounded-md right-0 translate-y-2">
        <button
          className="w-full rounded-sm px-2 py-1 hover:bg-gray03"
          onClick={() => {
            deleteTrackInPlaylist(+playlistId, trackId);
            setIsOpen(false);
          }}
        >
          Delete from playlist
        </button>
      </div>
    </div>
  );
}
