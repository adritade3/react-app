import "./PlayButton.css";
function PlayButton({ children, message, onPlay, onPause }) {
  let playing = false;
  const handleClick = () => {
    if (playing) onPlay();
    else onPause();
    playing = !playing;
  };
  return <button onClick={handleClick}>{children}</button>;
}

export default PlayButton;
