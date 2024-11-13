
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            ToDo
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/pokemon"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Pokémon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
