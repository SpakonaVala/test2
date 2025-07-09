import React from "react";
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to="/MainHall"
          className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        >
          MainHall
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/Dialogs"
          className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        >
          Dialogs
        </NavLink>
      </div>
      <div className={styles.item}>
      <NavLink
          to="/Create"
          className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        >
          Table
        </NavLink>
      </div>
      <div className={styles.item}>
      <NavLink
          to="/Settings"
          className={({ isActive }) => isActive ? `${styles.activeLink}` : ''}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;