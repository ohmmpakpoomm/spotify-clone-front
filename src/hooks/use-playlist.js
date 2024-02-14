import { useContext } from "react";
import { PlaylistContext } from "../features/playlist/contexts/PlaylistContext";

export default function usePlaylist() {
  return useContext(PlaylistContext);
}
