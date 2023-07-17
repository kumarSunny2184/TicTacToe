import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${isNext ? 'X' : 'O'}`;

  const handleSquareClick = clickedposition => {
    if (squares[clickedposition]) {
      return;
    }

    setSquares(currentSquare => {
      return currentSquare.map((squarevalue, position) => {
        if (clickedposition === position) {
          return isNext ? 'X' : 'O';
        }
        return squarevalue;
      });
    });

    setIsNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
