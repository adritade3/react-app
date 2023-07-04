import "./AddVideo.css";
import { useContext, useState } from "react";

import { useEffect } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

const initialState = {
  time: "5 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ editVideoForm }) {
  const dispatch = useContext(VideoDispatchContext);
  const [video, setVideo] = useState(initialState);
  const changeHandler = (e) => {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (editVideoForm) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo(initialState);
  };

  useEffect(() => {
    if (editVideoForm) setVideo({ ...editVideoForm });
  }, [editVideoForm]);
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
      <button onClick={submitHandler}>
        {editVideoForm ? "Edit" : "Add"} Video
      </button>
    </form>
  );
}

export default AddVideo;
