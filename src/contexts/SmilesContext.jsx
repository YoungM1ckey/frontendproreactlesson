import React, { createContext, useContext, useEffect, useState } from 'react';

const SmilesContext = createContext();

export function SmilesProvider({ children }) {
    const [smiles, setSmiles] = useState([]);
    const [result, setResult] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('smiles');
        if (saved) {
            setSmiles(JSON.parse(saved));
        } else {
            setSmiles([
                { symbol: '😀', count: 0 },
                { symbol: '😂', count: 0 },
                { symbol: '😍', count: 0 },
                { symbol: '😎', count: 0 },
                { symbol: '🤔', count: 0 },
            ]);
        }
    }, []);

    useEffect(() => {
        if (smiles.length > 0) {
            localStorage.setItem('smiles', JSON.stringify(smiles));
        }
    }, [smiles]);

    const vote = (index) => {
        setSmiles(prev => prev.map((item, i) => i === index ? { ...item, count: item.count + 1 } : item));
    };

    const showResults = () => {
        const max = Math.max(...smiles.map(s => s.count));
        if (max === 0) {
            setResult('No votes 😕');
        } else {
            const winners = smiles.filter(s => s.count === max).map(s => s.symbol);
            setResult(`Winner: ${winners.join(' ')} (${max} votes)`);
        }
    };

    const clearResults = () => {
        setSmiles(smiles.map(s => ({ ...s, count: 0 })));
        setResult('');
        localStorage.removeItem('smiles');
    };

    return (
        <SmilesContext.Provider value={{ smiles, result, vote, showResults, clearResults }}>
            {children}
        </SmilesContext.Provider>
    );
}

export function useSmiles() {
    return useContext(SmilesContext);
}