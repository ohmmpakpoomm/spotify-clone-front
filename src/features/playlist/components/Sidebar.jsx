import React from "react";
import { Home, Search, Library, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className=" text-gray05 bg-gray008 rounded-lg col-span-1 row-span-1 px-3 py-2 flex flex-col">
        <div className="flex items-center gap-4 px-3 py-1 h-1/2 hover:text-white transition duration-300">
          <Home size={24} />
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div className="flex items-center gap-4 px-3 py-1 h-1/2 hover:text-white transition duration-300">
          <Search size={24} />
          <Link to="/search">
            <span>Search</span>
          </Link>
        </div>
      </div>
      <div className="text-gray05 bg-gray008 rounded-lg col-span-1 row-start-2 row-end-7 px-2 pb-2">
        <div className="h-[8%] flex items-center justify-between px-2 py-2 hover:text-white transition duration-300">
          <div className="flex items-center gap-4 px-2 py-1 h-1/2">
            <Library size={24} />
            <span>Your Library</span>
          </div>
          <Plus size={24} />
        </div>
        <div className="h-[92%] row-span-6">list</div>
      </div>
    </>
  );
}
