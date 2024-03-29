import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Avatar from "../../../components/Avatar";
import Dropdown from "../../../components/Dropdown";
import usePlaylist from "../../../hooks/use-playlist.js";

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
    if (input) search();
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
              className=" h-[80%] w-1/2 text-sm bg-gray02 border border-gray02 p-4 rounded-full hover:border-gray04 focus:outline-none focus:border-2 focus:border-white transition-[300ms]"
            />
          </div>
        )}
        <div
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 flex justify-center items-center"
        >
          <Avatar />
          {isOpen && <Dropdown />}
        </div>
      </div>
    </>
  );
}
