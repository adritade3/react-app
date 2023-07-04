import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hook/Video";

function VideosList({ editVideo }) {
  const videos = useVideos();

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
