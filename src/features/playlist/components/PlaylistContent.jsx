import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlaylistContentList from "./PlaylistContentList";
import usePlaylist from "../../../hooks/use-playlist";
import PlaylistContentHeader from "./PlaylistContentHeader";

export default function PlaylistContent() {
  const { trackList, getTrackList } = usePlaylist();
  const id = useLocation().pathname.slice(10);

  useEffect(() => {
    getTrackList(id);
  }, [id]);

  return (
    <>
      <PlaylistContentHeader />
      <PlaylistContentList trackList={trackList} className="overflow-scroll" />
    </>
  );
}
