// src/components/BreakingBadQuotes.jsx

import React from 'react';
import { useFetch } from '../hooks/UseFetch';

const BreakingBadQuotes = () => {
  // Usar el hook useFetch con la URL de la API
  const { data, isLoading, hasError } = useFetch('https://breakingbadapi.com/api/quotes/1');

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-0">{data[0]?.quote}</p>
          <footer className="blockquote-footer">{data[0]?.author}</footer>
        </blockquote>
      )}

      {hasError && <p>Error: {hasError}</p>}
    </div>
  );
};

export default BreakingBadQuotes;
