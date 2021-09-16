// CRIAR HOOK PARA CRIAR O NOSSO CONTEXTO DA APP
import { useContext, createContext } from 'react'

export const defaultStore: any = {
  action: {},
  dispatch: {}
}

export const StoreContext = createContext(defaultStore)

export default () => {
  return useContext(StoreContext)
}
