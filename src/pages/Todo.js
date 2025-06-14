import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodo } from '../redux/actions/todoActions';
import styles from '../styles/Todo.module.css';


const TodoListPage = () => {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector(state => state.todo);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h2>Todo List</h2>
            {loading && <p>Loading tasks...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <ul className={styles.list}>
                {todos.map(todo => (
                    <li key={todo.id} className={styles.item}>
                        <input type="checkbox"
                               checked={todo.completed}
                               onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span className={todo.completed ? styles.completed : ''}>{todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListPage;
