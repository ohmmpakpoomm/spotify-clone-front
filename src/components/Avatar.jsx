import React from "react";
import useAuth from "../hooks/use-auth";

export default function Avatar() {
  const { authUser } = useAuth();
  return (
    <div className=" bg-green rounded-full p-1 min-w-8 min-h-8 flex items-center justify-center text-black18 text-sm">
      <span>{authUser.firstName}</span>
    </div>
  );
}
