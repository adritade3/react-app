import "./Video.css";

function Video({ title, channel, views, time }) {
  let bg = "dark";
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="" alt="" />
        </div>

        {/*  <div className={bg} style={{ backgroundColor: "red" }}>
        {topic}
      </div> */}
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
