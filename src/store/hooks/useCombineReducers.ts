import { useReducer } from 'react';
import counterReducer, { counterDefault } from 'store/counter/counter';
import pokemonReducer, { pokeDefault } from '../pokemons/pokeReducer';

const useCombineReducers = () => {
  const [counterStore, counter] = useReducer(counterReducer, counterDefault);
  const [pokemonStore, pokemonDispatch] = useReducer(
    pokemonReducer,
    pokeDefault
  );

  return {
    store: {
      ...counterStore,
      ...pokemonStore,
    },
    reducers: [pokemonDispatch, counter],
  };
};

export default useCombineReducers;
