import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodosType {
  todo: string,
  completed: boolean
}

interface TodosState {
	todos: TodosType[],
	isLoading: boolean,
	error: string | undefined,
}

const initialState: TodosState = {
  todos: [],
  isLoading: false,
  error: undefined,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: () => {},
    setTodos: (state, { payload } : PayloadAction<TodosState>) => {
      return { ...state, todos: payload.todos }
    },
	updateTodos: () => {},
	deleteTodos: () => {},
	setLoading: (state, { payload } : PayloadAction<TodosState>) => {
		return { ...state, isLoading: payload.isLoading }
	},
	setError: (state, { payload } : PayloadAction<TodosState>) => {
		return { ...state, error: payload.error }
	},
  },
})

export const {
 getTodos, setTodos, updateTodos, deleteTodos, setLoading, setError,
} = todosSlice.actions

export default todosSlice.reducer
