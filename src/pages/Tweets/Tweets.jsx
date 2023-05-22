import { useLocation } from 'react-router-dom';
import { Cards } from '../../components/Cards/Cards';
import { StyledLink, Arrow, Section } from './Tweets.styled';

const Tweets = () => {
  const location = useLocation();
  return (
    <Section>
      <StyledLink to={location.state.from}>
        <Arrow />
        Go back
      </StyledLink>

      <Cards></Cards>
    </Section>
  );
};

export default Tweets;
