export const fleetReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STARSHIP_TO_FLEET':
      let newState = [...state, action.payload];
      return newState;
    case 'UPDATE_STARSHIP':
      state.map((starship) => {
        if (starship.name === action.starship) {
          return (starship.totalPassengers =
            action.capacity * `0.${action.totalPassengers}`);
        } else {
          return starship;
        }
      });
      return state;
    default:
      return state;
  }
};
