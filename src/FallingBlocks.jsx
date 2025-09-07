import React, { useState, useEffect, useCallback} from 'react';

// Tetromino shapes as characters
const TETROMINOES = {
  Bracket: [
    [[' ', '/'], ['<'], [' ', '\\']],
    [[' ', '^', ' '], ['/', ' ', '\\']],
    [['\\'], [' ', '>'], ['/']],
    [['\\', ' ', '/'], [' ', 'V']],
  ],
  Int: [
    [['I', 'N', 'T']],
    [['I'], ['N'], ['T']]
  ],
  SquareBracket: [
    [['[', '-'], ['|'], ['[', '-']],
    [['T', '-', 'T'], ['|', ' ', '|']],
    [['-', ']'], [' ', '|'], ['-', ']']],
    [['|', ' ', '|'], ['L', '-', 'J']]
  ],
  Else: [
    [['E', 'L', 'S', 'E']],
    [['E'], ['L'],['S'],['E'],],
  ],
  PlusEquals: [
    [['+', '=']],
    [['+'], ['=']],
  ],
  CurlesBrackets: [
    [['{', '}'],['{','}']]
  ],
  If: [
    [['I', 'F']],
    [['I'], ['F']]
  ],
  TryCatch: [
    [['T','R','Y'], ['C','A','T','C','H']],
    [['C', 'T'], ['A', 'R'], ['T', 'Y'], ['C'], ['H']],
    [['H', 'C', 'T', 'A', 'C'], [' ', ' ','Y', 'R', 'T']],
    [[' ', 'H'], [' ', 'C'], ['Y', 'T'], ['R', 'A'], ['T', 'C']],
  ]
};

const createGrid = (rows = 19, cols = 10) =>
  Array.from({ length: rows }, () => Array(cols).fill(' '));

const randomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const type = keys[Math.floor(Math.random() * keys.length)];
  return { type, rotation: 0, shape: TETROMINOES[type][0], x: 3, y: 0 };
};

function FallingBlocks() {
  const [grid, setGrid] = useState(createGrid());
  const [currentPiece, setCurrentPiece] = useState(randomTetromino());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const isValidMove = (shape, x, y) => {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] !== ' ') {
          const newX = x + col;
          const newY = y + row;
          if (newX < 0 || newX >= 10 || newY >= 19) return false;
          if (grid[newY][newX] !== ' ') return false;
        }
      }
    }
    return true;
  };

  const mergePiece = (piece) => {
    const newGrid = grid.map(row => [...row]);
    piece.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell !== ' ') newGrid[piece.y + y][piece.x + x] = cell;
      });
    });
    return newGrid;
  };

  const clearLines = (newGrid) => {
    const cleared = newGrid.filter(row => row.some(cell => cell === ' '));
    const linesCleared = 19 - cleared.length;
    const emptyRows = Array.from({ length: linesCleared }, () => Array(10).fill(' '));
    if (linesCleared > 0) setScore(prev => prev + linesCleared);
    return [...emptyRows, ...cleared];
  };

  const moveDown = useCallback(() => {
    const { shape, x, y } = currentPiece;
    if (isValidMove(shape, x, y + 1)) {
      setCurrentPiece(prev => ({ ...prev, y: prev.y + 1 }));
    } else {
      const newGrid = mergePiece(currentPiece);
      const clearedGrid = clearLines(newGrid);
      setGrid(clearedGrid);
      const newPiece = randomTetromino();
      if (!isValidMove(newPiece.shape, newPiece.x, newPiece.y)) setGameOver(true);
      else setCurrentPiece(newPiece);
    }
  }, [currentPiece, grid]);

  const move = (dir) => {
    const { shape, x, y } = currentPiece;
    if (isValidMove(shape, x + dir, y)) setCurrentPiece(prev => ({ ...prev, x: prev.x + dir }));
  };

  const rotate = () => {
    const { type, rotation, x, y } = currentPiece;
    const nextRotation = (rotation + 1) % TETROMINOES[type].length;
    const nextShape = TETROMINOES[type][nextRotation];
    if (isValidMove(nextShape, x, y)) setCurrentPiece(prev => ({ ...prev, shape: nextShape, rotation: nextRotation }));
  };

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(moveDown, 500);
    return () => clearInterval(interval);
  }, [moveDown, gameOver]);

  useEffect(() => {
    const handleKey = (e) => {
      if (gameOver) return;
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowDown') moveDown();
      if (e.key === 'ArrowUp') rotate();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentPiece, grid, gameOver, moveDown]);

  const displayGrid = grid.map(row => [...row]);
  currentPiece.shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== ' ' && displayGrid[currentPiece.y + y] && displayGrid[currentPiece.y + y][currentPiece.x + x] === ' ') {
        displayGrid[currentPiece.y + y][currentPiece.x + x] = cell;
      }
    });
  });

  return (
    <div style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: 10 }}>
  <div>
    <p style={{ margin: 0 }}>Lines of code: {score}</p>
    {gameOver && <p style={{ color: 'red', margin: 0 }}>Game Over!</p>}
  </div>
  <div style={{ display: 'inline-block', lineHeight: 0 }}>
    {displayGrid.map((row, y) => (
      <div key={y} style={{ display: 'flex' }}>
        {row.map((cell, x) => (
          <div
            key={x}
            style={{
              width: 20,
              height: 20,
              border: '1px solid  darkgreen',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 16,
              color: 'lime',
            }}
          >
            {cell || ' '}
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
  );
}

export default FallingBlocks;