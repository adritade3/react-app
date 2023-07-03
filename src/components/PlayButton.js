import "./PlayButton.css";
function PlayButton({ children, message, onPlay, onPause }) {
  let playing = true;
  const handleClick = (e) => {
    e.stopPropagation();
    if (playing) onPlay();
    else onPause();
    playing = !playing;
  };
  return <button onClick={handleClick}>{children}</button>;
}

export default PlayButton;
