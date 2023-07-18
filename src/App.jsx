import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedposition => {
    if (squares[clickedposition] || winner) {
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
      <StatusMessage winner={winner} isNext={isNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
