import React from "react";

import "./index.css";

function Board() {
  const array = [
    "right",
    "right",
    "",
    "top right",
    "top right",
    "top",
    "top right",
    "top right",
    "top",
  ];
  return (
    <div className="board-container">
      {array.map((field, index) => {
        return (
          <div className={`board-container__fields ${field}`} key={index}></div>
        );
      })}
    </div>
  );
}

export default Board;
