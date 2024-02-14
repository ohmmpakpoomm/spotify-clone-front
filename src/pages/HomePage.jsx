import React from "react";
import HomePageLayout from "../layouts/HomePageLayout";
import Sidebar from "../features/playlist/components/Sidebar";
import ContentContainer from "../features/playlist/components/ContentContainer";
import Header from "../features/playlist/components/Header";
import { Outlet } from "react-router-dom";
import PlaylistContextProvider from "../features/playlist/contexts/PlaylistContext";

export default function HomePage() {
  return (
    <>
      <PlaylistContextProvider>
        <HomePageLayout>
          <Sidebar />
          <ContentContainer>
            <Header />
            <Outlet />
          </ContentContainer>
        </HomePageLayout>
        <div className="text-white h-[10vh]">player</div>
      </PlaylistContextProvider>
    </>
  );
}
