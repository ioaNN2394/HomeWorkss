
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/slices/todoSlice';
import styles from './styles/TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`${styles.text} ${
          todo.completed ? styles.textCompleted : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className={styles.deleteButton}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
