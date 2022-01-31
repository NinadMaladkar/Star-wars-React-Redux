import React from 'react';
import StarshipItem from './StarshipItem';

const StartshipList = ({ starshipList }) => {
  const renderedList = starshipList.map((starship) => {
    return (
      <div className="ui relaxed divided list" key={starship.name}>
        <StarshipItem starship={starship} />
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default StartshipList;
