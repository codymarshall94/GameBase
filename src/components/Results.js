import React from "react";
import { Link } from "react-router-dom";

const Results = ({gameResults, handleSelectedGame}) => {
  return (
    <div className="results-container">
      <ul>
        {gameResults.map((game) => (
          <li key={game.id}>
            <Link
              className="search-result"
              onClick={() => handleSelectedGame(game)}
              to="/info">
              {gameResults === null ? console.log("None") : <span>{game.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
