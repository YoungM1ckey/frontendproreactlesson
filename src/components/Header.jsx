import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <NavLink to="/" end className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                            Contact
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                            About
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/smiles" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
                            Smiles Page
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button className={styles.themeButton} onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
        </header>
    );
};

export default Header;
