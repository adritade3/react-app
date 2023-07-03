import "./App.css";
import Video from "./components/Video";
import videosData from "./data/data";
import PlayButton from "./components/PlayButton";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videosData);
  const clickHandler = () => {
    setVideos([
      ...videos,
      {
        id: videos.length + 1,
        title: "React Js Tutorial",
        views: "400K",
        time: "5 month ago",
        channel: "Coder Dost",
        verified: true,
      },
    ]);
  };
  return (
    <div className="App">
      <div>
        <button onClick={clickHandler}>Add Video</button>
      </div>
      {/* <Video {...obj}></Video> */}
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton>{video.title}</PlayButton>
        </Video>
      ))}
      {/* <div style={{ clear: "both" }}>
        <PlayButton
          message="Video Playing"
          onPlay={() => {
            console.log("Video playing");
          }}
          onPause={() => {
            console.log("Video Stopped");
          }}
        >
          Play
        </PlayButton> */}
      {/* <PlayButton
          message="Video stopped"
          onSmash={(msg) => {
            alert(msg);
          }}
        >
          Pause
        </PlayButton> */}
    </div>
  );
}

export default App;
