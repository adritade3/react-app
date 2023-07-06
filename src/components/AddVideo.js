import "./AddVideo.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import useVideoDispatch from "../hook/VideoDispatch";

const initialState = {
  time: "5 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ editVideoForm }) {
  console.log("add video rendered");
  const dispatch = useVideoDispatch();
  const inputRef = useRef(null);

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
    //inputRef.current.focus();
    inputRef.current.placeholder = "";
    "type here".split("").forEach((char, i) => {
      setTimeout(() => {
        inputRef.current.placeholder += char;
      }, 200 * i);
    });
  }, [editVideoForm]);
  return (
    <form>
      <input
        ref={inputRef}
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
