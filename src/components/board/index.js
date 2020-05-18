import React, { useState, useEffect } from "react";

import "./index.css";

function Board({ player, upDatePlayer, gameIsActive }) {
  const [gameArray, setGameArray] = useState();

  useEffect(() => {
    const array = [
      { line: "right", value: "" },
      { line: "right", value: "" },
      { line: "", value: "" },
      { line: "top right", value: "" },
      { line: "top right", value: "" },
      { line: "top", value: "" },
      { line: "top right", value: "" },
      { line: "top right", value: "" },
      { line: "top", value: "" },
    ];
    setGameArray(array);
  }, []);

  function updateBoard(e) {
    const tempArr = gameArray.map((item, index) => {
      if (index === Number(e.target.id)) {
        item.value = player;
      }
      return item;
    });
    setGameArray(tempArr);
    player === "X" ? (player = "O") : (player = "X");
    upDatePlayer(player);
  }
  return (
    <div className="board-container">
      {gameArray &&
        gameArray.map((field, index) => {
          return (
            <div
              className={`board-container__fields ${field.line}`}
              id={index}
              key={index}
              onClick={gameIsActive && !field.value ? updateBoard : null}
            >
              {field.value}
            </div>
          );
        })}
    </div>
  );
}

export default Board;
