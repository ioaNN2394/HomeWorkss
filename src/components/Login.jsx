// src/components/Login.jsx
import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginEmailPassword, loginWithGoogle } from '../store/authSlice';
import './Login.css'; // Asegúrate de tener este archivo de estilos

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  // Usar useMemo para determinar si el usuario está autenticado
  const isAuthenticated = useMemo(() => !!user, [user]);

  const handleLoginEmailPassword = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    dispatch(loginEmailPassword({ email, password }));
  };

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      {isAuthenticated ? (
        <div className="welcome-message">
          <p>Bienvenido, <strong>{user.email}</strong></p>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLoginEmailPassword}>
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
          <button type="submit" className="btn btn-email" disabled={loading || isAuthenticated}>
            {loading ? <span className="spinner"></span> : 'Iniciar Sesión con Email'}
          </button>
          <div className="separator">ó</div>
          <button
            type="button"
            className="btn btn-google"
            onClick={handleLoginWithGoogle}
            disabled={loading || isAuthenticated}
          >
            {loading ? <span className="spinner"></span> : 'Iniciar Sesión con Google'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
