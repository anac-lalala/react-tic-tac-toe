import { useState, useRef } from "react";
export const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditing() {
    setIsEditing((prev) => !prev);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let playerSpan = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerSpan = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {playerSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditing()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};
