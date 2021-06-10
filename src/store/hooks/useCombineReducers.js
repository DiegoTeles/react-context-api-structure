import { useReducer } from "react";
import counterReducer, { counterDefault } from "../counter/counter";
import pokemonReducer, { pokeDefault } from "../pokemons/pokeReducer";

const useCombineReducers = () => {
  const [counterStore, counter] = useReducer(counterReducer, counterDefault);
  const [pokemonStore, pokemons] = useReducer(pokemonReducer, pokeDefault);

  return {
    store: {
      ...counterStore,
      ...pokemonStore,
    },
    reducers: [counter, pokemons],
  };
};

export default useCombineReducers;
