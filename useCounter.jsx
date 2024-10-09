// src/hooks/useCounter.js

import { useState } from 'react';

// Definir el custom hook useCounter
export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  // Método para incrementar el contador
  const increment = () => {
    setCounter(counter + 1);
  };

  // Método para decrementar el contador
  const decrement = () => {
    setCounter(counter - 1);
  };

  // Método para resetear el contador al valor inicial
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
