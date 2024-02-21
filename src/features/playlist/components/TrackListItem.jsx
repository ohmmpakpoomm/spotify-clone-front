import React from "react";
import { Play, MoreHorizontal } from "lucide-react";
import usePlaylist from "../../../hooks/use-playlist.js";
import { useState } from "react";
import AddTrackDropdown from "./AddTrackDropdown.jsx";

export default function TrackListItem({ item, number }) {
  const { playTrack } = usePlaylist();
  const track = { ...item };
  const { name, duration_ms, uri, artists, album } = track;
  const artistName = artists[0].name;
  const albumName = album.name;
  const albumImageUrl = album.images[2].url;
  const [isOpen, setIsOpen] = useState(false);

  const min = Math.floor(duration_ms / 1000 / 60);
  const sec = Math.floor(duration_ms / 1000 - min * 60);
  let formatSec = "";
  if (sec < 10) {
    formatSec += "0" + sec;
  } else {
    formatSec = sec;
  }

  const trackData = {
    name,
    durationMs: duration_ms,
    uri,
    artistName,
    albumName,
    albumImage: albumImageUrl,
  };

  return (
    <li className="group w-full h-[56px] px-4 flex items-center gap-4 hover:bg-gray02 rounded-md">
      <div className="w-4 flex justify-end">
        <span className="text-gray05 block group-hover:hidden">{number}</span>
        <Play
          role="button"
          className="hidden group-hover:block fill-white"
          size={16}
          onClick={() => playTrack([uri])}
        />
      </div>
      <div className="flex flex-1 items-center">
        <img src={albumImageUrl} className=" w-10 h-10 mr-3" />
        <div className="flex flex-col">
          <span className="font-extralight text-sm">{name}</span>
          <small className=" text-gray05 group-hover:text-white">
            {artistName}
          </small>
        </div>
      </div>
      <div className="flex-1">
        <span className="font-extralight text-sm text-gray05 group-hover:text-white">
          {albumName}
        </span>
      </div>
      <div>
        <span className="font-extralight text-sm text-gray05">
          {`${min}:${formatSec}`}
        </span>
      </div>
      <div className="w-4">
        <MoreHorizontal
          className="hidden group-hover:block fill-white"
          size={16}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <AddTrackDropdown track={trackData} setIsOpen={setIsOpen} />}
      </div>
    </li>
  );
}
