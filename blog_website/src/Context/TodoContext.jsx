import React, { createContext, useReducer } from 'react'

// 1. Create the Context
export const TodoContext = createContext()

// 2. Initial state
const initialState = {
  todos: [] // each todo = { name, description, imageUrl, thumbnailUrl }
}

// 3. Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      }

    default:
      return state
  }
}

// 4. Provider component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}
