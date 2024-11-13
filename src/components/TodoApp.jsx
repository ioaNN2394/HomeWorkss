// components/TodoApp.jsx

import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import useTodo from '../store/hooks/useTodo'; 
import styles from './styles/TodoApp.module.css';

const TodoApp = () => {

  const {
    todos,
    addNewTodo,
    deleteExistingTodo,
    toggleExistingTodo,
    countTodos,
    countPendingTodos,
  } = useTodo();

  return (
    <div className={styles.todoContainer}>
      <h2 className={styles.title}>ToDo</h2>
      
      {/* Mostrar los contadores */}
      <div className={styles.counters}>
        <p>Total de ToDos: {countTodos}</p>
        <p>ToDos Pendientes: {countPendingTodos}</p>
      </div>
      
      {/* Formulario para agregar nuevos ToDos */}
      <TodoForm addNewTodo={addNewTodo} />
      
      {/* Lista de ToDos */}
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteExistingTodo}
            toggleTodo={toggleExistingTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
