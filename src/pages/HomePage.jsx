import React from "react";
import HomePageLayout from "../layouts/HomePageLayout";
import Sidebar from "../features/playlist/components/Sidebar";
import ContentContainer from "../features/playlist/components/ContentContainer";
import Header from "../features/playlist/components/Header";
import { Outlet } from "react-router-dom";
import PlaylistContextProvider from "../features/playlist/contexts/PlaylistContext";
import Player from "../features/playlist/components/Player";
import { getLocalSpotifyToken } from "../utils/local-storage";

export default function HomePage() {
  const token = getLocalSpotifyToken();
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
        <Player token={token} />
      </PlaylistContextProvider>
    </>
  );
}
