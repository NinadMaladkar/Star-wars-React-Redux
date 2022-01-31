import { combineReducers } from 'redux';
import { starshipReducer } from './StarshipReducer';
import { fleetReducer } from './FleetReducer';

export default combineReducers({
  starships: starshipReducer,
  starshipsInFleet: fleetReducer,
});
