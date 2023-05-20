import { LoadMoreButton } from './LoadMore.styled';

export const LoadMore = ({ load, isLoaded }) => {
  return (
    <LoadMoreButton
      onClick={e => {
        load(e);
      }}
    >
      {isLoaded ? 'Hide' : 'LoadMore'}
    </LoadMoreButton>
  );
};
