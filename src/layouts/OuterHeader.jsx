import React from "react";
import { Link } from "react-router-dom";
import SpotifyWhiteLogo from "../assets/Spotify_Logo_RGB_White.png";

export default function OuterHeader() {
  return (
    <div className=" sticky min-h-[100px] w-full bg-black18 top-0 left-0 px-12 flex items-center">
      <div>
        <Link to="/auth/login">
          <img src={SpotifyWhiteLogo} className=" w-32" />
        </Link>
      </div>
    </div>
  );
}
