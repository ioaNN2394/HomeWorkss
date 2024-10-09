// src/hooks/useFetch.js

import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  // Definir el estado inicial para data, isLoading y hasError
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  // useEffect para realizar la solicitud cuando la URL cambie
  useEffect(() => {
    // Función para realizar la petición a la URL
    const fetchData = async () => {
      setState({
        data: null,
        isLoading: true,
        hasError: null,
      });

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          hasError: error.message,
        });
      }
    };

    // Llamar a la función de carga de datos
    if (url) {
      fetchData();
    }
  }, [url]); // useEffect se activa cada vez que la URL cambie

  return state;
};
