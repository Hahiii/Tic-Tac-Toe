import React, { useState, useEffect } from "react";
import { getWinner } from "../../helpers/get-winner";
import "./index.css";

function Board({
  player,
  upDatePlayer,
  upDateScore,
  gameIsActive,
  playersObj,
}) {
  const INIT_GAME_ARRAY = [
    [
      { line: "right", value: "", win: "" },
      { line: "right", value: "", win: "" },
      { line: "", value: "", win: "" },
    ],
    [
      { line: "top right", value: "", win: "" },
      { line: "top right", value: "", win: "" },
      { line: "top", value: "", win: "" },
    ],
    [
      { line: "top right", value: "", win: "" },
      { line: "top right", value: "", win: "" },
      { line: "top", value: "", win: "" },
    ],
  ];
  const [gameWonArray, setGameWonArray] = useState([]);
  const [gameArray, setGameArray] = useState(INIT_GAME_ARRAY);

  useEffect(() => {
    if (!gameWonArray.length) {
      const gameArrayClone = [];
      gameArray.forEach((row) => {
        const arr = [];
        row.forEach((col) => {
          arr.push({ ...col });
        });
        gameArrayClone.push(arr);
      });
      const gotWinner = getWinner(gameArrayClone, player);
      if (!gotWinner) {
        upDatePlayer(player === "X" ? (player = "O") : (player = "X"));
      } else {
        setGameWonArray(gotWinner);
      }
    }
  }, [gameArray]);

  useEffect(() => {
    if (gameWonArray.length) {
      const playersObjClone = [];
      playersObj.forEach((element) => {
        if (element.stone === player) {
          element.winns += 1;
        }
        playersObjClone.push(element);
      });
      setGameArray(gameWonArray);
      upDateScore(playersObjClone);
    }
  }, [gameWonArray]);

  function updateBoard(e) {
    if (gameWonArray.length) {
      setGameArray(INIT_GAME_ARRAY);
      setGameWonArray([]);
      return true;
    }
    const elementRow = e.target.dataset.row;
    const elementCol = e.target.dataset.col;
    const tempArr = [...gameArray];
    tempArr[elementRow][elementCol].value = player;
    setGameArray(tempArr);
  }

  return (
    <div className="board-container">
      {gameArray &&
        gameArray.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <div
                className={`board-container__fields ${col.line} `}
                data-row={rowIndex}
                data-col={colIndex}
                key={`row-${rowIndex} col-${colIndex}`}
                onClick={gameIsActive && !col.value ? updateBoard : null}
              >
                <span className={`${col.win ? "win" : ""}`}>{col.value}</span>
              </div>
            );
          });
        })}
    </div>
  );
}

export default Board;
