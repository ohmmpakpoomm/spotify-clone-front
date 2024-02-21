import React from "react";
import usePlaylist from "../../../hooks/use-playlist";

export default function AddTrackDropdownItem({
  item,
  number,
  track,
  setIsOpen,
}) {
  const { name, user, playlistImage, id } = item;
  const { addTrackToPlaylist } = usePlaylist();

  return (
    <li>
      <div
        role="button"
        className="group h-fit px-4 py-2 gap-4 rounded-md bg-gray012 flex items-center hover:bg-gray03"
        onClick={() => {
          addTrackToPlaylist(id, track);
          setIsOpen(false);
        }}
      >
        <div className="flex flex-col flex-1">
          <span className="text-white">{name}</span>
        </div>
      </div>
    </li>
  );
}
