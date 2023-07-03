import Video from "./Video";
import PlayButton from "./PlayButton";

function VideosList({ videos, editVideo, deleteVideo }) {
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
          deleteVideo={deleteVideo}
        >
          <PlayButton>{video.title}</PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideosList;
