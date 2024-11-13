// components/TodoForm.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import styles from './styles/TodoForm.module.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añadir nuevo ToDo"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Añadir
      </button>
    </form>
  );
};

export default TodoForm;
