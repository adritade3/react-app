import { useState } from "react";
import "./PlayButton.css";
function PlayButton({ children }) {
  let [playing, setPlaying] = useState(false);

  console.log(
    playing ? children + "video playing" : children + "video stopped"
  );
  const handleClick = (e) => {
    e.stopPropagation();
    setPlaying(!playing);
  };
  return (
    <button onClick={handleClick}>
      {children}:{playing ? "⏸️" : "▶️"}
    </button>
  );
}

export default PlayButton;
