import "./App.css";
import videosData from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideosList from "./components/VideosList";

function App() {
  const [videos, setVideos] = useState(videosData);
  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };
  const deleteVideo = (id) => {
    const modifiedVideos = videos.filter((v) => v.id !== id);
    setVideos(modifiedVideos);
  };
  const editVideo = (id) => {};

  return (
    <div className="App">
      <AddVideo addVideo={addVideo}></AddVideo>
      <VideosList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideosList>
    </div>
  );
}

export default App;
