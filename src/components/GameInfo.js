import React from "react";
import "../css/gameinfo.css";

const xbox = require("../icons/Xbox.png");
const pc = require("../icons/PC.png");
const playstation = require("../icons/PlayStation.png");
const android = require("../icons/Android.png");
const ios = require("../icons/iOS.png");
const linux = require("../icons/Linux.png");
const apple = require("../icons/Apple.png");
const nintendo = require("../icons/Nintendo.png");

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
        <div className="selected-game-general">
          <div className="esrb-rating">{selectedGame["esrb_rating"] && selectedGame["esrb_rating"].name ? selectedGame["esrb_rating"].name : "Not Rated"}</div>
          {selectedGame.genres.map((genre) => (
            <div className="genre" key={genre.id}>
              {genre.name}
            </div>
          ))}
        </div>
        <div className="screenshot-container">
          {selectedGame["short_screenshots"].map((screenshot) => (
            <img
              src={screenshot.image}
              className="selected-game-screenshot"
              key={screenshot.id}
              alt=""
            />
          ))}
        </div>
        <div className="selected-game-platform-container">
          {selectedGame["parent_platforms"].map((platform) => (
            <img
              key={platform.platform.id}
              className="selected-game-platform-icon"
              src={
                platform.platform.name === "Xbox"
                  ? xbox
                  : platform.platform.name === "PlayStation"
                  ? playstation
                  : platform.platform.name === "PC"
                  ? pc
                  : platform.platform.name === "Android"
                  ? android
                  : platform.platform.name === "iOS"
                  ? ios
                  : platform.platform.name === "Linux"
                  ? linux
                  : platform.platform.name === "Apple Macintosh"
                  ? apple
                  : platform.platform.name === "Nintendo"
                  ? nintendo
                  : "No Image"
              }
              alt="platform"
            ></img>
          ))}
        </div>
        <div className="selected-game-main-info">
            <div className="main-info-title">Release Data:</div>
            <div>{selectedGame.released}</div>
          <div className="main-info-title">Platforms:</div>
          <div>
            {selectedGame.platforms.map((platform) => (
              <span className="selected-game-platform" key={platform.platform.id} >{platform.platform.name}</span>
            ))}
          </div>
          <div className="main-info-title">Tags:</div>
          <div>
            {selectedGame.tags.map((tag) => (
              <span className="selected-game-tag" key={tag.id} >{tag.name}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GameInfo;
