import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GameInfo from "./components/GameInfo";
import Header from "./components/Header";
import Home from "./components/Home";

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
        setIsLoading(false);
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
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              getNextPage={getNextPage}
              getPreviousPage={getPreviousPage}
              handleSelectedGame={handleSelectedGame}
              prevPage={prevPage}
              games={games}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/info" element={<GameInfo selectedGame={selectedGame} />}
        />
      </Routes>
    </>
  );
}

export default App;
