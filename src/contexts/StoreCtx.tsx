import { createContext, ReactNode, useReducer, Reducer } from 'react'

import { ITodo } from '../types'

type Action = {
  type: 'add' | 'delete' | 'done'
  payload: ITodo
}

interface StoreProps {
  state: ITodo[]
  dispatch: React.Dispatch<Action>
}

interface StoreProviderProps {
  children: ReactNode
}

export const Store = createContext({} as StoreProps)

const reducer = (state: ITodo[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter(todo => todo.id !== action.payload.id)

    case 'done':
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo

        return {
          ...todo,
          isDone: !action.payload.isDone
        }
      })

    default:
      throw new Error('AAAAAAAAAAAAAAAAAAAA')
  }
}

const initialState: ITodo[] = []

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer<Reducer<ITodo[], Action>>(
    reducer,
    initialState
  )

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
