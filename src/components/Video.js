import { useContext, useEffect } from "react";
import "./Video.css";
import useVideoDispatch from "../hook/VideoDispatch";
import { clear } from "@testing-library/user-event/dist/clear";

function Video({
  id,
  title,
  channel,
  views,
  time,
  verified,
  children,

  editVideo,
}) {
  const dispatch = useVideoDispatch();
  let bg = "dark";

  useEffect(() => {
    const idx = setInterval(() => {
      console.log("Video is rendered ", id);
    }, 1000);
    return () => {
      clearInterval(idx);
    };
  }, [id]);

  return (
    <>
      <div className="container">
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="alternative"
          />
        </div>

        {/*  <div className={bg} style={{ backgroundColor: "red" }}>
        {topic}
      </div> */}
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
