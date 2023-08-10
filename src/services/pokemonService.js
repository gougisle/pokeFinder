import axios from "axios";
const ENDPOINT = "https://pokeapi.co/api/v2/";

const getPokemonByGeneration = async (generationNum) => {
  const config = {
    method: "GET",
    url: `${ENDPOINT}generation/${generationNum}`,
    data: null,
  };

  let response = await axios(config);

  return response.data;
};

const getPokemonSpeciesData = async (query) => {
  const config = {
    method: "GET",
    url: `${ENDPOINT}pokemon-species/${query}`,
    data: null,
  };

  let response = await axios(config);

  return response.data;
};

const getPokemonBasicData = async (query) => {
  const config = {
    method: "GET",
    url: `${ENDPOINT}pokemon/${query}`,
    data: null,
  };

  let response = await axios(config);

  return response.data;
};

const pokemonService = {
  getPokemonByGeneration,
  getPokemonSpeciesData,
  getPokemonBasicData,
};
export default pokemonService;
