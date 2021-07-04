import api from './api'

interface TodosType {
	id: number,
	todo: string,
	completed: boolean
}

export default class TodosApi {

	static getTodos(): Promise<TodosType> {
	  return new Promise<TodosType>((resolve, reject) => {
		api.get('/todos')
		.then( res => resolve(res.data) )
		.catch( err => reject(err.message) )
	  });
	}

	static addTodo(todo: TodosType): Promise<TodosType> {
		return new Promise<TodosType>((resolve, reject) => {
		  api.post('/todos', todo)
		  .then( res => resolve(res.data) )
		  .catch( err => reject(err.message) )
		});
	}

	static updateTodo(id:number, todo: TodosType): Promise<TodosType> {
		return new Promise<TodosType>((resolve, reject) => {
		  api.put('/todos/'+id, todo)
		  .then( res => resolve(res.data) )
		  .catch( err => reject(err.message) )
		});
	}

	static deleteTodo(id:number): Promise<TodosType> {
		return new Promise<TodosType>((resolve, reject) => {
		  api.delete('/todos/'+id)
		  .then( res => resolve(res.data) )
		  .catch( err => reject(err.message) )
		});
	}
}