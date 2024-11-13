
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import { pokemonApi } from './api/pokemonApi';
import { loadState, saveState } from './localStorage';


const persistedState = loadState();

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  
  preloadedState: {
    todos: persistedState ? persistedState.todos : undefined,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(pokemonApi.middleware),
});


store.subscribe(() => {
  const state = store.getState();
  saveState({
    todos: state.todos,
  });
});

export default store;
