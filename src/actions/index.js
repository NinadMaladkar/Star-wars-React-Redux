export const fetchStarships = (starships) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_STARSHIPS', payload: starships });
  };
};

export const addStarshipToFleet = (starships) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_STARSHIP_TO_FLEET', payload: starships });
  };
};

export const updateStarship = (starship, totalPassengers, capacity) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_STARSHIP',
      starship,
      totalPassengers,
      capacity,
    });
  };
};
