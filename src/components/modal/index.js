import React, { useState } from "react";

import "./index.css";

function SetPlayers({ onClick }) {
  const [playerX, setPlayerX] = useState({});
  const [playerO, setPlayerO] = useState({});

  function handleChange(e) {
    switch (e.target.name) {
      case "X":
        setPlayerX({ name: e.target.value.trim(), stone: e.target.name });
        break;
      case "O":
        setPlayerO({ name: e.target.value.trim(), stone: e.target.name });
        break;
      default:
        break;
    }
  }
  function submitPlayers(e) {
    onClick([playerX, playerO]);
  }

  function checkInputs() {
    if (playerX.name && playerO.name) {
      return true;
    }
  }

  return (
    <div className="modal-container">
      <div className="modal-input-container">
        <label className="modal__label" htmlFor="X">
          Name for player: X
        </label>
        <input
          className="modal__input"
          type="text"
          name="X"
          id="X"
          onChange={handleChange}
        />
      </div>
      <div className="modal-input-container">
        <label className="modal__label" htmlFor="O">
          Name for player: O
        </label>
        <input
          className="modal__input"
          type="text"
          id="O"
          name="O"
          onChange={handleChange}
        />
      </div>
      {checkInputs() && (
        <div className="modal-button-container">
          <button className="modal__button" onClick={submitPlayers}>
            Start Game
          </button>
          <span className="button__loader"></span>
        </div>
      )}
    </div>
  );
}

export default SetPlayers;
