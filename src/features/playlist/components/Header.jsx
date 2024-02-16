import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { useLocation } from "react-router-dom";
import usePlaylist from "../../../hooks/use-playlist.js";
import { useEffect } from "react";

export default function Header() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const { searchTrack } = usePlaylist();

  const hdlChangeInput = async (e) => {
    try {
      setInput(e.target.value);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const search = async () => await searchTrack(input);
    search();
  }, [input]);

  return (
    <>
      <div className="flex justify-between items-center gap-4 h-[8%]">
        <div className="bg-black18 rounded-full p-1">
          <Link to="/">
            <ChevronLeft size={24} />
          </Link>
        </div>
        {location.pathname === "/search" && (
          <div className="w-full h-full flex items-center">
            <input
              type="text"
              onChange={hdlChangeInput}
              placeholder="What do you want to play?"
              className=" h-[90%] w-1/2 text-sm bg-gray02 border border-gray02 p-4 rounded-full hover:border-gray04 focus:outline-none focus:border-2 focus:border-white"
            />
          </div>
        )}
        <div role="button" onClick={() => setIsOpen(!isOpen)}>
          <Avatar />
          {isOpen && <Dropdown />}
        </div>
      </div>
    </>
  );
}
