import { useContext } from "react";
import VideoContext from "../context/VideosContext";

function useVideos() {
  const videos = useContext(VideoContext);
  return videos;
}

export default useVideos;
