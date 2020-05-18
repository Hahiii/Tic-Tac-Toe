import React, { useState, useEffect } from "react";

import "./index.css";

function Board({ player, upDatePlayer, gameIsActive }) {
  const [gameArray, setGameArray] = useState();

  useEffect(() => {
    if (!gameArray) {
      const array = [
        [
          { line: "right", value: "" },
          { line: "right", value: "" },
          { line: "", value: "" },
        ],
        [
          { line: "top right", value: "" },
          { line: "top right", value: "" },
          { line: "top", value: "" },
        ],
        [
          { line: "top right", value: "" },
          { line: "top right", value: "" },
          { line: "top", value: "" },
        ],
      ];
      setGameArray(array);
    }
  }, [gameArray]);

  function updateBoard(e) {
    console.log(e.target.dataset);
    const elementRow = e.target.dataset.row;
    const elementCol = e.target.dataset.col;
    const tempArr = gameArray.map((row, rowIndex) => {
      if (rowIndex === Number(elementRow)) {
        row.map((col, colIndex) => {
          if (colIndex === Number(elementCol)) {
            col.value = player;
          }
          return col;
        });
      }
      return row;
    });
    setGameArray(tempArr);
    player === "X" ? (player = "O") : (player = "X");
    upDatePlayer(player);
  }
  return (
    <div className="board-container">
      {gameArray &&
        gameArray.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <div
                className={`board-container__fields ${col.line}`}
                data-row={rowIndex}
                data-col={colIndex}
                key={`row-${rowIndex} col-${colIndex}`}
                onClick={gameIsActive && !col.value ? updateBoard : null}
              >
                {col.value}
              </div>
            );
          });
        })}
    </div>
  );
}

export default Board;
