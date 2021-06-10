import { useContext, useReducer } from "react";
import { StoreContext } from "../hooks/useStore";
import PokeReducer from './pokeReducer'

export const PokeState = ({ children }) => {
  const initialState = {
    pokemons: [], 
    error: false,
    message: ""
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  return (
    <StoreContext.Consumer
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {children}
    </StoreContext.Consumer>
  );
};
