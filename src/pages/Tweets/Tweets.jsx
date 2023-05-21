import { useLocation } from 'react-router-dom';
import { Cards } from '../../components/Cards/Cards';
import { StyledLink, Arrow } from './Tweets.styled';

const Tweets = () => {
  const location = useLocation();
  return (
    <section>
      <StyledLink to={location.state.from}>
        <Arrow />
        Go back
      </StyledLink>

      <Cards></Cards>
    </section>
  );
};

export default Tweets;
