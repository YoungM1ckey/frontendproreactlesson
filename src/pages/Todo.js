import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions';
import styles from '../styles/Todo.module.css';

const TodoPage = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className={styles.todoContainer}>
            <h2 className={styles.todoTitle}>TODO</h2>
            <form className={styles.todoForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    placeholder="Add a task"
                    onChange={e => setText(e.target.value)}
                    className={styles.todoInput}
                />
                <button type="submit" className={styles.todoButton}>Add</button>
            </form>

            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <li key={todo.id} className={styles.todoItem}>📝 {todo.text}</li>
                ))}
            </ul>

            <footer className={styles.todoFooter}>
                Total tasks: {todos.length}
            </footer>
        </div>
    );
};

export default TodoPage;
