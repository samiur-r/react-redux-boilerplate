/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
 import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import TodosApi from '../api/todosApi';
import { 
	getTodos, addTodos, updateTodo, deleteTodo, setTodos, setLoading, setSuccess, setError, 
} from '../reducers/todosSlice';

export function* fetchTodos() {
  try {
	yield put(setLoading(true))
    const todos = yield call(TodosApi.getTodos);
    yield put(setTodos(todos))
	yield put(setLoading(false))
  } catch (err) {
      yield put(setError(err))
  }
}

export function* addTodo({ payload }) {
	try {
		yield put(setLoading(true))
		yield call(TodosApi.addTodo, payload);
		yield put(getTodos());
		yield put(setSuccess('Success!'))
	} catch (err) {
		yield put(setError(err))
	}
} 

export function* editTodo({ payload }) {
	try {
		yield put(setLoading(true))
		yield call(TodosApi.updateTodo, payload);
		yield put(getTodos());
		yield put(setSuccess('Success!'))
	} catch (err) {
		yield put(setError(err))
	}
}

export function* removeTodo({ payload }) {
	try {
		yield put(setLoading(true))
		yield call(TodosApi.deleteTodo, payload);
		yield put(getTodos());
		yield put(setSuccess('Success!'))
	} catch (err) {
		yield put(setError(err))
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
