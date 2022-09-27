import React, { useEffect, useState } from "react";
import "./App.css";
import GameList from "./components/GameList";
import Header from "./components/Header";

const axios = require('axios');
// https://rawg.io/
// 317612d4689e479aa46dc75b7e45ec7d API KEY

function App() {
const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("https://api.rawg.io/api/games?key=317612d4689e479aa46dc75b7e45ec7d")
    .then(res => {
      setGames(res.data.results);
      console.log(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  
  return (
    <div className="container d-flex justify-content-center flex-column">
      <Header />
      <h1 className="game-section">Current Games</h1>
      <GameList games={games}/>
    </div>
  );
}

export default App;
