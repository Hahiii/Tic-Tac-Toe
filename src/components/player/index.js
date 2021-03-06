import React from "react";
import "./index.css";

function Player({ player, stone, turn }) {
  return (
    <div className="player">
      <h2 className="player__name">
        {`${player}:`}
        <span className={`player__stone turn__${stone === turn && turn}`}>
          {stone}
        </span>
      </h2>
    </div>
  );
}

export default Player;
