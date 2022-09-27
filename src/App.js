import React, { useEffect, useState } from "react";
import "./App.css";
import GameInfo from "./components/GameInfo";
import GameList from "./components/GameList";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";

const axios = require("axios");
// https://rawg.io/
// 317612d4689e479aa46dc75b7e45ec7d API KEY

function App() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://api.rawg.io/api/games?key=317612d4689e479aa46dc75b7e45ec7d"
  );
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGame, setSelectedGame] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${currentPage}`)
      .then((res) => {
        setGames(res.data.results);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        setTimeout(() => setIsLoading(false), 250);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const getNextPage = () => {
    setCurrentPage(nextPage);
  };

  const getPreviousPage = () => {
    setCurrentPage(prevPage);
  };

  const handleSelectedGame = (game) => {
    setSelectedGame(game);
  };

  return (
    <div>
      <div className="container d-flex justify-content-center flex-column">
        <Header />
        <Pagination
          getPreviousPage={getPreviousPage}
          getNextPage={getNextPage}
          prevPage={prevPage}
        />
        <h1 className="game-section">Current Games</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <GameList games={games} handleSelectedGame={handleSelectedGame} />{" "}
            <Pagination
              getPreviousPage={getPreviousPage}
              getNextPage={getNextPage}
              prevPage={prevPage}
            />
          </>
        )}
      </div>
      <GameInfo selectedGame={selectedGame} />
    </div>
  );
}

export default App;
