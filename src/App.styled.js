import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 25px 15px 25px;
`;

const StyledLink = styled(NavLink)`
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #373737;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: rgba(55, 55, 55, 0.7);
  }

  &.active {
    color: #5cd3a8;

    &:hover {
      color: #1be99f;
    }
  }
`;
export { Navigation, StyledLink };
