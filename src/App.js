import React from "react";
import "./App.css";
import Title from "./components/site-title";
import Player from "./components/player";
import Board from "./components/board";

function App() {
  const players = [
    { name: "hahi", stone: "X" },
    { name: "buba", stone: "O" },
  ];
  return (
    <div className="App">
      <div className="players-container">
        {players.map((player, index) => {
          return (
            <Player player={player.name} stone={player.stone} key={index} />
          );
        })}
      </div>
      <Title />
      <Board />
    </div>
  );
}

export default App;
