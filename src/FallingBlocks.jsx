import React, { useState, useEffect, useCallback, useRef } from 'react';
import Leaderboard from './Leaderboard';

const ROWS = 19;
const COLS = 10;

const TETROMINOES = {
  Bracket: [
    [[' ', '/'], ['<', ' '], [' ', '\\']],
    [[' ', '^', ' '], ['/', ' ', '\\']],
    [['\\', ' '], [' ', '>'], ['/', ' ']],
    [['\\', ' ', '/'], [' ', 'V', ' ']],
  ],
  Int: [
    [['I', 'N', 'T']],
    [['I'], ['N'], ['T']],
  ],
  SquareBracket: [
    [['[', '-'], ['|', ' '], ['[', '-']],
    [['T', '-', 'T'], ['|', ' ', '|']],
    [['-', ']'], [' ', '|'], ['-', ']']],
    [['|', ' ', '|'], ['L', '-', 'J']],
  ],
  Else: [
    [['E', 'L', 'S', 'E']],
    [['E'], ['L'], ['S'], ['E']],
  ],
  PlusEquals: [
    [['+', '=']],
    [['+'], ['=']],
  ],
  CurlyBrackets: [
    [['{', '}'], ['{', '}']],
  ],
  If: [
    [['I', 'F']],
    [['I'], ['F']],
  ],
  TryCatch: [
    [['T', 'R', 'Y'], ['C', 'A', 'T', 'C', 'H']],
    [['C', 'T'], ['A', 'R'], ['T', 'Y'], ['C', ' '], ['H', ' ']],
    [['H', 'C', 'T', 'A', 'C'], [' ', ' ', 'Y', 'R', 'T']],
    [[' ', 'H'], [' ', 'C'], ['Y', 'T'], ['R', 'A'], ['T', 'C']],
  ],
};

const createGrid = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(' '));

const randomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const type = keys[Math.floor(Math.random() * keys.length)];
  const shape = TETROMINOES[type][0];
  const startX = Math.max(0, Math.floor((COLS - shape[0].length) / 2));
  return { type, rotation: 0, shape, x: startX, y: 0 };
};

const isValidMove = (grid, shape, x, y) => {
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== ' ') {
        const newX = x + col;
        const newY = y + row;
        if (newX < 0 || newX >= COLS || newY >= ROWS) return false;
        if (newY >= 0 && grid[newY][newX] !== ' ') return false;
      }
    }
  }
  return true;
};

const mergePiece = (grid, piece) => {
  const newGrid = grid.map(row => [...row]);
  piece.shape.forEach((row, dy) => {
    row.forEach((cell, dx) => {
      if (cell !== ' ') {
        const ny = piece.y + dy;
        const nx = piece.x + dx;
        if (ny >= 0 && ny < ROWS && nx >= 0 && nx < COLS) {
          newGrid[ny][nx] = cell;
        }
      }
    });
  });
  return newGrid;
};

const clearLines = (grid) => {
  const kept = grid.filter(row => row.some(cell => cell === ' '));
  const linesCleared = ROWS - kept.length;
  const empty = Array.from({ length: linesCleared }, () => Array(COLS).fill(' '));
  return { newGrid: [...empty, ...kept], linesCleared };
};

function FallingBlocks() {
  const [grid, setGrid] = useState(createGrid);
  const [currentPiece, setCurrentPiece] = useState(randomTetromino);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [cellSize, setCellSize] = useState(20);

  const gridRef = useRef(grid);
  const pieceRef = useRef(currentPiece);
  const gameOverRef = useRef(gameOver);
  const containerRef = useRef(null);

  useEffect(() => { gridRef.current = grid; }, [grid]);
  useEffect(() => { pieceRef.current = currentPiece; }, [currentPiece]);
  useEffect(() => { gameOverRef.current = gameOver; }, [gameOver]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const cellW = Math.floor(width / COLS);
      const cellH = Math.floor((height - 30) / ROWS); // 30px for score line
      setCellSize(Math.max(10, Math.min(cellW, cellH)));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const lockPieceAndAdvance = useCallback((piece, currentGrid) => {
    const merged = mergePiece(currentGrid, piece);
    const { newGrid, linesCleared } = clearLines(merged);
    if (linesCleared > 0) setScore(prev => prev + linesCleared);
    setGrid(newGrid);
    const next = randomTetromino();
    if (!isValidMove(newGrid, next.shape, next.x, next.y)) {
      setGameOver(true);
    } else {
      setCurrentPiece(next);
    }
  }, []);

  const moveDown = useCallback(() => {
    const piece = pieceRef.current;
    const currentGrid = gridRef.current;
    if (isValidMove(currentGrid, piece.shape, piece.x, piece.y + 1)) {
      setCurrentPiece(prev => ({ ...prev, y: prev.y + 1 }));
    } else {
      lockPieceAndAdvance(piece, currentGrid);
    }
  }, [lockPieceAndAdvance]);

  const moveHorizontal = useCallback((dir) => {
    const piece = pieceRef.current;
    const currentGrid = gridRef.current;
    if (isValidMove(currentGrid, piece.shape, piece.x + dir, piece.y)) {
      setCurrentPiece(prev => ({ ...prev, x: prev.x + dir }));
    }
  }, []);

  const rotate = useCallback(() => {
    const piece = pieceRef.current;
    const currentGrid = gridRef.current;
    const nextRotation = (piece.rotation + 1) % TETROMINOES[piece.type].length;
    const nextShape = TETROMINOES[piece.type][nextRotation];
    if (isValidMove(currentGrid, nextShape, piece.x, piece.y)) {
      setCurrentPiece(prev => ({ ...prev, shape: nextShape, rotation: nextRotation }));
    }
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const id = setInterval(moveDown, 500);
    return () => clearInterval(id);
  }, [moveDown, gameOver]);

  useEffect(() => {
    const handleKey = (e) => {
      if (gameOverRef.current) return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); moveHorizontal(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); moveHorizontal(1); }
      if (e.key === 'ArrowDown')  { e.preventDefault(); moveDown(); }
      if (e.key === 'ArrowUp')    { e.preventDefault(); rotate(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [moveDown, moveHorizontal, rotate]);

  const displayGrid = grid.map(row => [...row]);
  currentPiece.shape.forEach((row, dy) => {
    row.forEach((cell, dx) => {
      const ny = currentPiece.y + dy;
      const nx = currentPiece.x + dx;
      if (
        cell !== ' ' &&
        ny >= 0 && ny < ROWS &&
        nx >= 0 && nx < COLS &&
        displayGrid[ny][nx] === ' '
      ) {
        displayGrid[ny][nx] = cell;
      }
    });
  });

  const resetGame = () => {
    setGrid(createGrid());
    setCurrentPiece(randomTetromino());
    setScore(0);
    setGameOver(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: 'monospace',
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <p style={{ margin: '0 0 4px', color: 'lime', fontSize: Math.max(10, cellSize * 0.6) }}>
        Lines of code: {score}
      </p>

      <div style={{ display: 'inline-block', lineHeight: 0 }}>
        {displayGrid.map((row, y) => (
          <div key={y} style={{ display: 'flex' }}>
            {row.map((cell, x) => (
              <div
                key={x}
                style={{
                  width: cellSize,
                  height: cellSize,
                  border: '1px solid darkgreen',
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: Math.max(8, cellSize * 0.55),
                  color: 'lime',
                  userSelect: 'none',
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      {gameOver && (
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '1rem',
            boxSizing: 'border-box',
            borderRadius: 8,
          }}
        >
          <div
            style={{
              width: '80%',
              maxHeight: '80%',
              overflowY: 'auto',
              backgroundColor: '#222',
              borderRadius: 8,
            }}
          >
            <Leaderboard score={score} />
          </div>
          <button
            onClick={resetGame}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.5rem',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: 5,
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default FallingBlocks;