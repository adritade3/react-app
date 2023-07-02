import "./PlayButton.css";
function PlayButton({ children, message, onSmash }) {
  const handleClick = () => {
    onSmash(message);
  };
  return <button onClick={handleClick}>{children}</button>;
}

export default PlayButton;
