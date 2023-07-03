import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App">
      <div>Videos</div>
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
        ></Video>
      ))}
      <div style={{ clear: "both" }}>
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
        </PlayButton>
        <PlayButton
          message="Video stopped"
          onSmash={(msg) => {
            alert(msg);
          }}
        >
          Pause
        </PlayButton>
      </div>
    </div>
  );
}

export default App;
