
import React from 'react';
import styles from './styles/TodoItem.module.css';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className={styles.item}>
      <span
        onClick={() => toggleTodo(todo.id)} 
        className={`${styles.text} ${todo.completed ? styles.textCompleted : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
