import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func.isRequired,
};

export default Square;
