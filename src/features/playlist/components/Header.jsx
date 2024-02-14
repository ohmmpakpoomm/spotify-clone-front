import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { useLocation } from "react-router-dom";
import usePlaylist from "../../../hooks/use-playlist.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const location = useLocation();
  const { searchTrack } = usePlaylist();

  const hdlChangeInput = async (e) => {
    try {
      setInput(e.target.value);
      await searchTrack(input);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4 h-[6%]">
        <div className="bg-black18 rounded-full p-1">
          <Link to="/">
            <ChevronLeft size={24} />
          </Link>
        </div>
        {location.pathname === "/search" && (
          <input
            type="text"
            onChange={hdlChangeInput}
            placeholder="What do you want to play?"
            className="h-full w-full text-sm bg-gray02 border border-gray02 p-4 rounded-full hover:border-gray04 focus:outline-none focus:border-2 focus:border-white"
          />
        )}
        <div role="button" onClick={() => setIsOpen(!isOpen)}>
          <Avatar />
          {isOpen && <Dropdown />}
        </div>
      </div>
    </>
  );
}
