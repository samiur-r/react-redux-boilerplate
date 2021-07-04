import api from './api'

interface TodoType {
	id: number,
	todo: string,
	completed: boolean
}

export default class TodosApi {

	static getTodos() {
	  return new Promise((resolve, reject) => {
		api.get('/todos')
		.then( res => resolve(res.data) )
		.catch( err => reject(err.message) )
	  });
	}

	static addTodo(todo: TodoType) {
		return new Promise((resolve, reject) => {
		  api.post('/todos', todo)
		  .then( res => resolve(res.data) )
		  .catch( err => reject(err.message) )
		});
	}

	static updateTodo(id:number, todo: TodoType) {
		return new Promise((resolve, reject) => {
		  api.put('/todos/'+id, todo)
		  .then( res => resolve(res.data) )
		  .catch( err => reject(err.message) )
		});
	}

	static deleteTodo(id:number) {
		return new Promise((resolve, reject) => {
		  api.delete('/todos/'+id)
		  .then( res => resolve(res.data) )
		  .catch( err => reject(err.message) )
		});
	}
}