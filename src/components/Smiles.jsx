import React from 'react';
import { useSmiles } from '../contexts/SmilesContext';
import styles from './Smiles.module.css';

function Smiles() {
    const { smiles, result, vote, showResults, clearResults } = useSmiles();

    return (
        <div className={styles.smilesContainer}>
            <div className={styles.smileList}>
                {smiles.map((smile, index) => (
                    <div
                        key={smile.symbol}
                        className={styles.smileItem}
                        onClick={() => vote(index)}
                    >
                        {smile.symbol}
                        <br />
                        <small>{smile.count} votes</small>
                    </div>
                ))}
            </div>
            <div className={styles.result}>{result}</div>
            <div className={styles.buttons}>
                <button onClick={showResults}>Show Results</button>
                <button onClick={clearResults}>Clear Results</button>
            </div>
        </div>
    );
}

export default Smiles;