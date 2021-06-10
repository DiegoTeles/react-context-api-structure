
export const getPokemonData = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await res.json();
  return data;
};
