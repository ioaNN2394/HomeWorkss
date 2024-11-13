// App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoApp from './components/TodoApp';
import PokemonApp from './components/PokemonApp';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/pokemon" element={<PokemonApp />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
