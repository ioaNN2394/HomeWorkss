

import React from 'react';
import { useCounter } from '../hooks/useCounter';

const CounterApp = () => {
  // Usar el hook personalizado useCounter con un valor inicial de 10
  const { counter, increment, decrement, reset } = useCounter(10);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Custom Counter Hook</h1>
      <h2>{counter}</h2>
      <button onClick={increment} className="btn btn-primary" style={{ margin: '5px' }}>
        +1
      </button>
      <button onClick={decrement} className="btn btn-danger" style={{ margin: '5px' }}>
        -1
      </button>
      <button onClick={reset} className="btn btn-secondary" style={{ margin: '5px' }}>
        Reset
      </button>
    </div>
  );
};

export default CounterApp;
