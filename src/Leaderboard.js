import React, { useState, useEffect, useRef } from 'react';

const Leaderboard = ({ score: parentScore }) => {
  const [username, setUsername] = useState('');
  const [scores, setScores] = useState([]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const usernameRef = useRef(null);

  const API_URL = 'https://api.kyrylo.uk/scores';

  useEffect(() => {
    if (!submitted) usernameRef.current?.focus();
  }, [submitted]);

  const fetchScores = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setScores(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  const submitScore = async (e) => {
    e.preventDefault();
    if (!username || parentScore == null) return;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, score: Number(parentScore) }),
      });

      const data = await res.json();

      if (data.error) {
        setMessage(`Error: ${data.error}`);
      } else {
        setMessage(`Thank you, ${data.username}! Your score of ${data.score} is saved.`);
        setUsername('');
        setSubmitted(true);
        fetchScores();
      }
    } catch (err) {
      console.error(err);
      setMessage('Failed to submit score');
    }
  };

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: 10,
        width: '300px',
        margin: '0 auto',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Leaderboard</h1>

      {!submitted ? (
        <>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Your Score: {parentScore}</p>
          <form onSubmit={submitScore} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                padding: '0.5rem',
                borderRadius: 5,
                border: '1px solid #555',
                backgroundColor: '#2a2a2a',
                color: '#fff',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.5rem',
                borderRadius: 5,
                border: 'none',
                backgroundColor: '#4caf50',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        message && <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{message}</p>
      )}

      <div style={{ marginTop: '2rem' }}>
        {scores.map((s, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.4rem 0.6rem',
              borderBottom: '1px solid #333',
              fontWeight: index === 0 ? 'bold' : 'normal', // highlight top score
            }}
          >
            <span>{s.username}</span>
            <span>{s.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;