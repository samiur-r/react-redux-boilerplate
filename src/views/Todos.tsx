import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/reducers/todosSlice';
import { RootState } from '../store';

const Todos: React.FC = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state: RootState) => state.todos.todos)
	const error = useSelector((state: RootState) => state.todos.error)
	console.log(error)
    useEffect(() => {
		dispatch(getTodos())
	}, [dispatch])

	useEffect(() => {
		// eslint-disable-next-line prefer-template
		// eslint-disable-next-line no-console
		console.log(`Todos: `+ JSON.stringify(todos))
	}, [todos])

    return (
        <div>
            Todos
        </div>
    )
}

export default Todos;
