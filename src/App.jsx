import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { SmilesProvider } from './contexts/SmilesContext';
import Header from './components/Header';
import Smiles from './components/Smiles';
import Footer from './components/Footer';
import styles from './App.css';

function App() {
  return (
      <ThemeProvider>
        <SmilesProvider>
          <div className={styles.appContainer}>
            <Header />
            <Smiles />
            <Footer />
          </div>
        </SmilesProvider>
      </ThemeProvider>
  );
}

export default App;