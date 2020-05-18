import React, { useState, useEffect } from "react";
import { getWinner } from "../../helpers/get-winner";
import "./index.css";

function Board({ player, upDatePlayer, gameIsActive }) {
  const [gotAWiner, setGotAWiner] = useState([]);
  const [gameArray, setGameArray] = useState([
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
  ]);

  useEffect(() => {
    const gotWinner = getWinner(gameArray, player);
    if (!gotWinner)
      upDatePlayer(player === "X" ? (player = "O") : (player = "X"));
    else setGotAWiner(gotWinner);
  }, [gameArray]);

  function updateBoard(e) {
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
