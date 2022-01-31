import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import getStarships from '../api/Starship';
import StartshipList from './StartshipList';
import StarshipFleet from './StarshipFleet';

const App = () => {
  const [searchStarships, setSearchStarships] = useState([]);
  let term, starshipList;

  const onSearchSubmit = async (searchResults) => {
    starshipList = await getStarships(searchResults);
    setSearchStarships(starshipList);
  };

  return (
    <div className="ui container">
      <div className="ui centered grid ">
        <div className="ui row">
          <h1 className="heading">
            <u>Star Fleet Manager</u>
          </h1>
        </div>
        <div className="ui row main-wrap">
          <div className="ten wide column fleet-manager">
            <SearchBar onFormSubmit={onSearchSubmit} term={term} />
            <StartshipList starshipList={searchStarships} />
          </div>
          <div className="six wide column fleet">
            <StarshipFleet term={term} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
