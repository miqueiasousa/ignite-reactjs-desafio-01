import { createContext, ReactNode, useReducer, Reducer } from 'react'

interface Todo {
  id: string
  description: string
  isDone: boolean
}

type Action = {
  type: 'add' | 'delete' | 'done'
  payload: Todo
}

interface StoreProviderProps {
  children: ReactNode
}

export const Store = createContext({})

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter(todo => (todo.id = action.payload.id))

    case 'done':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isDone = !action.payload.isDone
        }

        return todo
      })

    default:
      throw new Error('AAAAAAAAAAAAAAAAAAAA')
  }
}

const initialState: Todo[] = []

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer<Reducer<Todo[], Action>>(
    reducer,
    initialState
  )

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
