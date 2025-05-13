import React, { useEffect, useState } from 'react';
import EmojiList from './components/EmojiList';
import ResultDisplay from './components/ResultDisplay';
import ControlButtons from './components/ControlButtons';

const EMOJIS = ['😀', '😂', '😍', '😎', '🤔'];

const App = () => {
  const [votes, setVotes] = useState({});
  const [result, setResult] = useState('');

  useEffect(() => {
    const storedVotes = localStorage.getItem('votes');
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    } else {
      const initialVotes = {};
      EMOJIS.forEach((emoji) => {
        initialVotes[emoji] = 0;
      });
      setVotes(initialVotes);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(votes).length > 0) {
      localStorage.setItem('votes', JSON.stringify(votes));
    }
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prev) => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1,
    }));
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...Object.values(votes));
    if (maxVotes === 0) {
      setResult('No votes 😕');
      return;
    }
    const winners = Object.entries(votes)
        .filter(([_, count]) => count === maxVotes)
        .map(([emoji]) => emoji);
    setResult(`Winner: ${winners.join(' ')} (${maxVotes} votes)`);
  };

  const handleClear = () => {
    const clearedVotes = {};
    EMOJIS.forEach((emoji) => (clearedVotes[emoji] = 0));
    setVotes(clearedVotes);
    setResult('');
    localStorage.removeItem('votes');
  };

  return (
      <div style={{ textAlign: 'center', marginTop: '50px', userSelect: 'none' }}>
        <h1>Emoji voting</h1>
        <EmojiList className="no-select" emojis={EMOJIS} votes={votes} onVote={handleVote} />
        <ResultDisplay result={result} />
        <ControlButtons onShowResults={handleShowResults} onClear={handleClear} />
      </div>
  );
};

export default App;
