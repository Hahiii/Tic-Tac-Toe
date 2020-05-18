import React, { useState } from "react";
import "./App.css";
import Title from "./components/site-title";
import Player from "./components/player";
import Board from "./components/board";
import SetPlayers from "./components/modal";

function App() {
  const [players, setPlayers] = useState([]);
  const [playerTurn, setPlayerTurn] = useState("X");

  function handleClick(params) {
    setPlayers(params);
  }

  function upDatePlayer(params) {
    setPlayerTurn(params);
  }

  return (
    <div className="App">
      {!players.length && <SetPlayers onClick={handleClick} />}
      <div className="players-container">
        {players.map((player, index) => {
          return (
            <Player
              player={player.name}
              stone={player.stone}
              key={index}
              turn={playerTurn}
            />
          );
        })}
      </div>
      <Title />
      <Board
        player={playerTurn}
        upDatePlayer={upDatePlayer}
        gameIsActive={players.length}
      />
    </div>
  );
}

export default App;
