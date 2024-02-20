import React from "react";
import { Home, Search, Library, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import PlaylistList from "./PlaylistList";
import usePlaylist from "../../../hooks/use-playlist.js";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const { createPlaylist } = usePlaylist();
  return (
    <>
      <div className=" text-gray05 font-medium bg-gray008 rounded-lg col-span-2 row-span-1 px-3 py-2 flex flex-col">
        <Link
          to="/"
          className=" px-3 py-1  h-1/2 hover:text-white transition duration-300"
        >
          <div
            className={`${
              location.pathname === "/" && "text-white"
            } flex items-center gap-4  h-full`}
          >
            <Home size={24} />
            <span>Home</span>
          </div>
        </Link>
        <Link
          to="/search"
          className=" px-3 py-1  h-1/2 hover:text-white transition duration-300"
        >
          <div
            className={`${
              location.pathname === "/search" && "text-white"
            } flex items-center gap-4  h-full`}
          >
            <Search size={24} />
            <span>Search</span>
          </div>
        </Link>
      </div>
      <div className="text-gray05 bg-gray008 rounded-lg col-span-2 row-start-2 row-end-7 px-2 pb-2 flex flex-col gap-2">
        <div className="h-[8%] flex items-center justify-between px-2 py-2 hover:text-white transition duration-300">
          <div className="flex items-center gap-4 px-2 py-2 h-1/2 font-medium">
            <Library size={24} />
            <span>Your Library</span>
          </div>
          <Plus role="button" size={24} onClick={() => createPlaylist()} />
        </div>
        <div className="h-[92%] row-span-6">
          <PlaylistList />
        </div>
      </div>
    </>
  );
}
