import Video from "./Video";
import PlayButton from "./PlayButton";
import { useContext } from "react";
import VideoContext from "../context/VideoContext";

function VideosList({ editVideo }) {
  const videos = useContext(VideoContext);

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton>{video.title}</PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideosList;
