import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import SmilesPage from './pages/SmilesPage';
import { ThemeProvider } from './contexts/ThemeContext'
import { SmilesProvider } from './contexts/SmilesContext'


function App() {
    return (
        <ThemeProvider>
            <SmilesProvider>
                <Router>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/smiles" element={<SmilesPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </SmilesProvider>
        </ThemeProvider>
    );
}

export default App;
