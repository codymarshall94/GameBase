import React from "react";
import "../css/gamelist.css";

const xbox = require("../icons/Xbox.png");
const pc = require("../icons/PC.png");
const playstation = require("../icons/PlayStation.png");
const android = require("../icons/Android.png");
const ios = require("../icons/iOS.png");
const linux = require("../icons/Linux.png");
const apple = require("../icons/Apple.png");
const nintendo = require("../icons/Nintendo.png");

function GameList({ games, handleSelectedGame }) {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row d-flex justify-content-center">
        {games.map((game) => (
          <div className="col-sm-10 col-md-5 col-lg-3 col-xl-2 game-container" key={game.id} onClick={() => handleSelectedGame(game)}>
            <div className="img-container">
              <img src={game["background_image"]} className="game-img" alt="" />
            </div>
            <div className="game-info">
              <div>
                {game["parent_platforms"].map((platform) => (
                  <img
                    key={platform.platform.id}
                    className="platform-icon"
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
              <div>
                <span className="game-info-name">{game.name}</span>
              </div>
              <div className="game-info-rating mt-3">{game.metacritic}</div>
            </div>
            <div className="game-info-hover" id="game-info-hover">
              <div className="game-info-hover-divider">
                <span className="game-info-hover-title">Release Date:</span>
                <span>{game.released}</span>
              </div>
              <div className="game-info-hover-divider">
                <span className="game-info-hover-title">Genre:</span>
                {game.genres.map((genre) => (
                  <span className="p-1" key={genre.id}>{genre.name}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameList;
