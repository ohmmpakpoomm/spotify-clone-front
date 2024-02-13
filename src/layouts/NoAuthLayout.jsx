import React from "react";
import OuterHeader from "./OuterHeader";
import { Outlet } from "react-router-dom";

export default function NoAuthLayout() {
  return (
    <>
      <OuterHeader />
      <Outlet />
    </>
  );
}
