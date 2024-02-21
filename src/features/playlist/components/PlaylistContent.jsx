import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as playlistApi from "../../../apis/playlist";
import PlaylistContentList from "./PlaylistContentList";
import { useLocation } from "react-router-dom";
import usePlaylist from "../../../hooks/use-playlist";

export default function PlaylistContent() {
  const { trackList, getTrackList } = usePlaylist();
  const id = useLocation().pathname.slice(10);

  useEffect(() => {
    getTrackList(id);
  }, [id]);

  return <PlaylistContentList trackList={trackList} />;
}
