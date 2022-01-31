export const starshipReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STARSHIPS':
      return [...state, action.payload];
    default:
      return state;
  }
};
