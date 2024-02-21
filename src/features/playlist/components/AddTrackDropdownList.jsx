import React from "react";

import usePlaylist from "../../../hooks/use-playlist.js";
import AddTrackDropdownItem from "./AddTrackDropdownItem.jsx";

export default function AddTrackDropdownList({ track, setIsOpen }) {
  const { playlists } = usePlaylist();

  return (
    <ul className="flex flex-col gap-2 overflow-scroll">
      {playlists.map((item, index) => (
        <AddTrackDropdownItem
          key={index}
          item={item}
          number={index + 1}
          track={track}
          setIsOpen={setIsOpen}
        />
      ))}
    </ul>
  );
}
