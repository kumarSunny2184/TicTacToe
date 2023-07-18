import PropTypes from 'prop-types';

const StatusMessage = ({ winner, isNext, squares }) => {
  const nomoveLeft = squares.every(squarevalue => squarevalue !== null);
  const nextplayer = isNext ? 'X' : 'O';

  const renderstatusmesage = () => {
    if (winner) {
      return (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && nomoveLeft) {
      return (
        <>
          <span className="text-orange">O</span> and{' '}
          <span className="Text-green">X</span> tied
        </>
      );
    }
    if (!winner && !nomoveLeft) {
      return (
        <>
          Next player is{' '}
          <span className={isNext ? 'text-green' : 'text-orange'}>
            {nextplayer}
          </span>
        </>
      );
    }

    return null;
  };
  return <h2 className="status-message">{renderstatusmesage()}</h2>;
};
StatusMessage.propTypes = {
  winner: PropTypes.string, // Allows string or null
  isNext: PropTypes.bool.isRequired,
  squares: PropTypes.array.isRequired,
};

export default StatusMessage;
