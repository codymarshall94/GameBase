import React from "react";
import "../css/gameinfo.css";

function GameInfo({ selectedGame }) {
  if (selectedGame !== undefined) {
    return (
      <div className="selected-game-container">
        <img
          className="selected-game-img"
          src={selectedGame["background_image"]}
          alt=""
        />

        <div className="selected-game-name">{selectedGame.name}</div>
      </div>
    );
  }
}

export default GameInfo;
