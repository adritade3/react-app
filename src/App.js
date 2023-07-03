import "./App.css";
import videosData from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideosList from "./components/VideosList";

function App() {
  const [videos, setVideos] = useState(videosData);
  const [editVideoForm, setEditVideoForm] = useState(null);
  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };
  const deleteVideo = (id) => {
    const modifiedVideos = videos.filter((v) => v.id !== id);
    setVideos(modifiedVideos);
  };
  const editVideo = (id) => {
    const editableVideo = videos.find((v) => v.id === id);
    setEditVideoForm(editableVideo);
  };

  const updateVideo = (video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    const updatedList = [...videos];
    updatedList.splice(index, 1, video);
    setVideos(updatedList);
  };

  return (
    <div className="App">
      <AddVideo
        editVideoForm={editVideoForm}
        addVideo={addVideo}
        updateVideo={updateVideo}
      ></AddVideo>
      <VideosList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideosList>
    </div>
  );
}

export default App;
