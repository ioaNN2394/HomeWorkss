
import React, { useState } from 'react';
import styles from './styles/TodoForm.module.css';

const TodoForm = ({ addNewTodo }) => { 
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      
      addNewTodo({ id: Date.now(), text, completed: false });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Agregar una nueva tarea"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Agregar
      </button>
    </form>
  );
};

export default TodoForm;
