export const pokeDefault = {
  pokemons: {}
}

export const GET_POKEMON = '@poke/GET_POKEMON'

const pokemonReducer = (state = pokeDefault, action: any) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return state
  }
}

export default pokemonReducer
