import React, { useState } from "react";
import usePlaylist from "../../../hooks/use-playlist";
import { useLocation } from "react-router-dom";

export default function PlaylistContentHeaderForm({
  placeholder,
  setIsChanging,
  getData,
}) {
  const playlistId = useLocation().pathname.slice(10);
  const { changePlaylistInfo } = usePlaylist();
  const [input, setInput] = useState("");

  const hdlChange = (e) => {
    setInput(e.target.value);
  };

  const hdlSubmit = (e) => {
    const data = { name: input };
    if (!input) {
      return setIsChanging(false);
    }
    changePlaylistInfo(playlistId, data);
    getData();
    setIsChanging(false);
  };
  return (
    <form onSubmit={hdlSubmit}>
      <input
        placeholder={placeholder}
        className="w-full text-white  text-[84px] font-bold bg-gray004"
        onChange={hdlChange}
      />
    </form>
  );
}
