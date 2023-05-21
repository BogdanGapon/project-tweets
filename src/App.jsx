import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';
import { Navigation, StyledLink } from './App.styled';
export const App = () => {
  return (
    <>
      <header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets" state={{ from: '/' }}>
            Tweets
          </StyledLink>
        </Navigation>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
