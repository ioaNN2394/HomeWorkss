// src/App.jsx
import './App.css';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register'; // Importar Register
import NavComponent from './components/NavComponent';
import { Routes, Route } from 'react-router-dom';

function App() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);  // Verifica el estado del usuario en la consola

  return (
    <div>
      {/* Componente de navegación */}
      <NavComponent />
      
      {/* Contenido principal */}
      <main className="container">
        <Routes>
          <Route path="/" element={
            user ? (
              <>
                <h1>Hola Mundo</h1>
                <h2>Bienvenido, {user.email}</h2>
              </>
            ) : (
              <Login />
            )
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Añadir ruta de registro */}
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
