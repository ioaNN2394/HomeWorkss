// components/TodoApp.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import styles from './styles/TodoApp.module.css';



export const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={styles.todoContainer}>
      <h2 className={styles.title}>Todo App</h2>
      <TodoForm />
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
