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
	success: string | null,
}

const initialState: TodosState = {
  todos: [],
  isLoading: false,
  error: null,
  success: null,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: () => {},
	addTodos: (state, { payload } : PayloadAction<any>) => {},
	updateTodo: (state, { payload } : PayloadAction<any>) => {},
	deleteTodo: (state, { payload } : PayloadAction<any>) => {},
    setTodos: (state, { payload } : PayloadAction<any>) => {
      return { ...state, todos: payload }
    },
	setLoading: (state, { payload } : PayloadAction<any>) => {
		return { ...state, isLoading: payload }
	},
	setSuccess: (state, { payload } : PayloadAction<any>) => {
		return { ...state, success: payload }
	},
	setError: (state, { payload } : PayloadAction<any>) => {
		return { ...state, error: payload }
	},
  },
})

export const {
 getTodos, addTodos, updateTodo, deleteTodo, setTodos, setLoading, setError, setSuccess,
} = todosSlice.actions

export default todosSlice.reducer
