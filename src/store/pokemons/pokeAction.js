import { GET_POKEMON } from "./pokeReducer";

export const getPokeAction = async (dispatch, id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  dispatch({
    type: GET_POKEMON,
    payload: data,
  });
};
