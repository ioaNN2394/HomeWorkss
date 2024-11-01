// src/components/Register.jsx
import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerWithEmailPassword } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Importar el archivo de estilos

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  // Usar useMemo para determinar si el usuario está autenticado
  const isAuthenticated = useMemo(() => !!user, [user]);

  const handleRegister = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    dispatch(registerWithEmailPassword({ email, password }));
  };

  // Efecto para redirigir al usuario después del registro
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirigir a la página de inicio
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="register-container">
      <h2 className="register-title">Crear Cuenta</h2>
      {isAuthenticated ? (
        <div className="welcome-message">
          <p>Bienvenido, <strong>{user.email}</strong></p>
        </div>
      ) : (
        <form className="register-form" onSubmit={handleRegister}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="btn btn-register" disabled={loading || isAuthenticated}>
            {loading ? <span className="spinner"></span> : 'Crear Cuenta'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;
