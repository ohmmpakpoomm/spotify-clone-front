import React from "react";
import AddTrackDropdownList from "./AddTrackDropdownList";

export default function AddTrackDropdown({ track, setIsOpen }) {
  return (
    <div className="relative">
      <div className="absolute w-[200px] text-sm font-light bg-gray02 shadow-[0_0_15px_rgb(0,0,0,0.4)] p-2 rounded-md right-0 translate-y-2">
        <AddTrackDropdownList track={track} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
