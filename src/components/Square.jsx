import PropTypes from 'prop-types';

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Square;
