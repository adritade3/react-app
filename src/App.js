import "./App.css";
import Video from "./components/Video";

function App() {
  let obj = {
    title: "React Js Tutorial",
    views: "10K",
    time: "1 year ago",
    channel: "New Learning",
  };
  return (
    <div className="App">
      <div>Videos</div>
      <Video {...obj}></Video>
      <Video
        title="Node Js Tutorial"
        views="99K"
        time="1 month ago"
        channel="New Learning"
      ></Video>
      <Video
        title="Angular Js Tutorial"
        views="100K"
        time="5 days ago"
        channel="New Learning"
      ></Video>
    </div>
  );
}

export default App;
