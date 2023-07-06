import "./App.css";
import videosData from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideosList from "./components/VideosList";
import { useReducer } from "react";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./components/Counter";

function App() {
  const [editVideoForm, setEditVideoForm] = useState(null);
  const reducerFunc = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((v) => v.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const updatedList = [...videos];
        updatedList.splice(index, 1, action.payload);
        setEditVideoForm(null);
        return updatedList;
      default:
        return;
    }
  };

  const [videos, dispatch] = useReducer(reducerFunc, videosData);

  const editVideo = (id) => {
    const editableVideo = videos.find((v) => v.id === id);
    setEditVideoForm(editableVideo);
  };

  return (
    <VideosContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className="App">
          <AddVideo editVideoForm={editVideoForm}></AddVideo>
          <VideosList editVideo={editVideo}></VideosList>
        </div>
      </VideoDispatchContext.Provider>
    </VideosContext.Provider>
  );
}

export default App;
