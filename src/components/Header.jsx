import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Header.module.css';

function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className={styles.header}>
            <h2>Emoji Voting App</h2>
            <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
        </header>
    );
}

export default Header;