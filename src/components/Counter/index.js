import ConnectTo from "../../store/connect";
import { getPokeAction } from "../../store/pokemons/pokeAction";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../store/counter/counter";
import { useEffect } from "react";

const Counter = ({ dispatch, counter, pokemons }) => {
  const incrementHandler = () => dispatch(incrementAction());
  const decrementHandler = () => dispatch(decrementAction());
  const resetHandler = () => dispatch(resetAction());
  const getHandler = () => dispatch(getPokeAction(dispatch, 1));

  useEffect(() => {
    dispatch(getPokeAction(dispatch, counter));
  }, [counter]);

  return (
    <>
      <p> {counter} </p>
      <p> {pokemons.name} </p>
      {pokemons.sprites && pokemons.sprites.front_default && (
        <img src={pokemons.sprites.front_default} alt={pokemons.name} />
      )}

      <div>
        <button onClick={decrementHandler}> - </button>
        <button onClick={resetHandler}> Reset </button>
        <button onClick={incrementHandler}> + </button>
      </div>
      <button onClick={getHandler}> GET Pokemon</button>
    </>
  );
};

const mapStateToProps = ({ counter, pokemons }, props) => {
  return {
    counter,
    pokemons,
    ...props,
  };
};

export default ConnectTo(mapStateToProps)(Counter);
