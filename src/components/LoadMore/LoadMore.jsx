import { LoadMoreButton } from './LoadMore.styled';
import PropTypes from 'prop-types';
export const LoadMore = ({ load, isLoaded }) => {
  return (
    <LoadMoreButton
      onClick={() => {
        load();
      }}
    >
      {isLoaded ? 'Hide' : 'LoadMore'}
    </LoadMoreButton>
  );
};

LoadMore.propTypes = {
  load: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};
