// src/components/NavComponent.jsx
import  { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/authSlice';
import { Link } from 'react-router-dom';
import './NavComponent.css'; // Asegúrate de tener este archivo de estilos

const NavComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">Registro</Link>
            </li>
          </>
        )}
      </ul>
      {isAuthenticated && (
        <div className="auth-section">
          <span className="nav-link">Bienvenido, {user.email}</span>
          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavComponent;
