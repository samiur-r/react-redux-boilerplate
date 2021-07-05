/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
 import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import TodosApi from '../api/todosApi';
import { 
	getTodos, addTodos, updateTodo, deleteTodo, setTodos, setLoading, setError,
} from '../reducers/todosSlice';

export function* fetchTodos() {
  try {
    const todos = yield call(TodosApi.getTodos);
    yield put(setTodos(todos))
  } catch (error) {
    yield put(setError(error));
  }
}

export function* addTodo(todo) {
	try {
		const todos = yield call(TodosApi.addTodo, todo);
		yield put(setTodos(todos));
	} catch (error) {
		yield put(setError(error));
	}
} 

export function* editTodo({ id, todo }) {
	try {
		const todos = yield call(TodosApi.updateTodo, { id, todo });
		yield put(setTodos(todos));
	} catch (error) {
		yield put(setError(error));
	}
}

export function* removeTodo(id) {
	try {
		const todos = yield call(TodosApi.deleteTodo, id);
		yield put(setTodos(todos));
	} catch (error) {
		yield put(setError(error));
	}
}

export function* watchGetTodos() {
	yield takeLatest(getTodos, fetchTodos);
}

export function* watchAddTodo() {
	yield takeLatest(addTodos, addTodo);
}

export function* watchUpdateTodo() {
	yield takeLatest(updateTodo, editTodo);
}

export function* watchDeleteTodo() {
	yield takeLatest(deleteTodo, removeTodo);
}

function* todosSaga() {
	yield all([fork(watchGetTodos), fork(watchAddTodo), fork(watchUpdateTodo), fork(watchDeleteTodo)])
  }
  
export default todosSaga;
