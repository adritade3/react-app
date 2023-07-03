import "./AddVideo.css";
import { useState } from "react";

const initialState = {
  time: "5 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideo }) {
  const [video, setVideo] = useState(initialState);
  const changeHandler = (e) => {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addVideo(video);
    setVideo(initialState);
  };
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={changeHandler}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={changeHandler}
        placeholder="views"
        value={video.views}
      />
      <button onClick={submitHandler}>Add Video</button>
    </form>
  );
}

export default AddVideo;
