import React from 'react';
import GameList from "../components/GameList";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";


function Home({getNextPage, getPreviousPage, prevPage, games, isLoading, handleSelectedGame}) {
  
  return (
    <div>
      <div className="container d-flex justify-content-center flex-column">
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
            <GameList games={games} handleSelectedGame={handleSelectedGame} />
            <Pagination
              getPreviousPage={getPreviousPage}
              getNextPage={getNextPage}
              prevPage={prevPage}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Home