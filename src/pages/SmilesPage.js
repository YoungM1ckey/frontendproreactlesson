import React from 'react';
import { useSmiles } from '../contexts/SmilesContext';
import styles from '../styles/SmilesPage.module.css';


const SmilesPage = () => {
    const { smiles, vote, result, showResults, clearResults } = useSmiles();

    return (
        <div className={styles.smilesContainer}>
            <h2>Vote for the emoticons!</h2>
            <ul className={styles.smileList}>
                {smiles.map((s, i) => (
                    <li key={i} className={styles.smileItem}>
                        {s.symbol} — {s.count}
                        <button style={{ marginLeft: '10px' }} onClick={() => vote(i)}>Vote</button>
                    </li>
                ))}
            </ul>
            <div className={styles.buttons}>
                <button onClick={showResults}>Show results</button>
                <button onClick={clearResults}>Clear</button>
            </div>
            {result && <h3 className={styles.result}>{result}</h3>}
        </div>
    );
};

export default SmilesPage;
