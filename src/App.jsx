import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isNext: false },
  ]);
  const [currentMove, setcurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedposition => {
    if (gamingBoard.squares[clickedposition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTravesing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTravesing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextsquareState = lastGamingState.squares.map(
        (squarevalue, position) => {
          if (clickedposition === position) {
            return lastGamingState.isNext ? 'X' : 'O';
          }
          return squarevalue;
        }
      );

      const base = isTravesing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextsquareState,
        isNext: !lastGamingState.isNext,
      });
    });

    setcurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setcurrentMove(move);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />

      <h2>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
