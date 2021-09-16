import { useReducer } from 'react'
import { StoreContext } from '../hooks/useStore'
import PokeReducer from './pokeReducer'

export const PokeState = ({ children }: any) => {
  const initialState = {
    pokemons: [],
    error: false,
    message: ''
  }

  const [state, dispatch] = useReducer(PokeReducer, initialState)

  const value = {
    state,
    dispatch: dispatch
  }

  return <StoreContext.Consumer {...value}>{children}</StoreContext.Consumer>
}
