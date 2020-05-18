import React from "react";
import Score from "../score";
import "./index.css";

function Player({ player, stone }) {
  return (
    <div className="player">
      <h2 className="player__name">{`${player}: ${stone}`}</h2>
      <Score />
    </div>
  );
}

export default Player;
