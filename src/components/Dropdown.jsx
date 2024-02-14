import React from "react";
import useAuth from "../hooks/use-auth";

export default function Dropdown() {
  const { logout } = useAuth();
  return (
    <div className="relative">
      <ul className="absolute w-[150px] text-sm font-light bg-gray02 shadow-[0_0_15px_rgb(0,0,0,0.4)] p-2 rounded-md right-0 translate-y-2">
        <li role="button" className="hover:bg-gray03 p-2 rounded-lg">
          Delete Account
        </li>
        <hr />
        <li
          role="button"
          onClick={logout}
          className="hover:bg-gray03 p-2 rounded-lg"
        >
          Log out
        </li>
      </ul>
    </div>
  );
}
