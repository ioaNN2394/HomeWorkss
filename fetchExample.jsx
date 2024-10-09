// src/components/FetchExample.js

import React from 'react';
import { useFetch } from '../hooks/useFetch';

const FetchExample = () => {
  // Usar el hook useFetch con una URL de ejemplo
  const { data, isLoading, hasError } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Fetch Example</h1>

      {isLoading && <p>Loading...</p>}
      {hasError && <p>Error: {hasError}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default FetchExample;
