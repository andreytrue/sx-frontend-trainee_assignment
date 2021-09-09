import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  dead: PropTypes.bool.isRequired,
  parent: PropTypes.number.isRequired,
  poll: PropTypes.number.isRequired,
  kids: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  parts: PropTypes.array.isRequired,
  descendants: PropTypes.number.isRequired,
}).isRequired;
