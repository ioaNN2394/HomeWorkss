// store/store.js

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import { pokemonApi } from './api/pokemonApi';
import { loadState, saveState } from './localStorage';

// Cargar el estado inicial desde localStorage
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Si hay un estado persistente, úsalo como preloadedState
  preloadedState: {
    todos: persistedState ? persistedState.todos : undefined,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desactiva las verificaciones serializables si usas RTK Query
    }).concat(pokemonApi.middleware),
});

// Suscribirse al store para guardar el estado en localStorage cada vez que cambie
store.subscribe(() => {
  const state = store.getState();
  saveState({
    todos: state.todos,
  });
});

export default store;
