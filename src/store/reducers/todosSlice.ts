import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodosType {
  id: number,
  todo: string,
  completed: boolean
}

interface TodosState {
	todos: TodosType[],
	isLoading: boolean,
	error: string | null,
}

const initialState: TodosState = {
  todos: [],
  isLoading: false,
  error: null,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: () => {},
	addTodos: () => {},
	updateTodo: () => {},
	deleteTodo: () => {},
    setTodos: (state, { payload } : PayloadAction<TodosState>) => {
      return { ...state, todos: payload.todos }
    },
	setLoading: (state, { payload } : PayloadAction<TodosState>) => {
		return { ...state, isLoading: payload.isLoading }
	},
	setError: (state, { payload } : PayloadAction<TodosState>) => {
		return { ...state, error: payload.error }
	},
  },
})

export const {
 getTodos, addTodos, updateTodo, deleteTodo, setTodos, setLoading, setError,
} = todosSlice.actions

export default todosSlice.reducer
