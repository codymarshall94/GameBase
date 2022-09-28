import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/search.css";
import Results from './Results';

const Search = ({handleSelectedGame}) => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        console.log("Running");
        if(offset > 40) {
            setGameResults([]);
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()
    setGameResults([])

    axios.get(`https://api.rawg.io/api/games?search=${slug}&page_size=5&key=317612d4689e479aa46dc75b7e45ec7d`)
    .then(res => res.data)
    .then(({results}) => {
      results.length === undefined ? setGameResults(null) : setGameResults(results)
    })
    setSearchTerm("")
  }

  return (
    <div className="game-search">
        <form onSubmit={onSubmit}>
          <input className='search-input' type="text" value={searchTerm} onChange={handleChange} placeholder="Search Games.."/>
        </form>
        <Results gameResults={gameResults} handleSelectedGame={handleSelectedGame}/>
    </div>
  );
}

export default Search;