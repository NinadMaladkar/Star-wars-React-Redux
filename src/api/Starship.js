import axios from 'axios';

const getStarships = async (searchTerm) => {
  const result = await axios.get(
    `https://swapi.dev/api/starships?search=${searchTerm}`
  );
  const starships = result.data.results;
  return starships;
};

export default getStarships;
