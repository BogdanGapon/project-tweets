import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiArrowLongLeft } from 'react-icons/hi2';
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 15px;

  font-size: 14px;
  text-decoration: none;
  color: #373737;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #5cd3a8;
  }
`;

const Arrow = styled(HiArrowLongLeft)`
  margin-right: 4px;
`;

const Section = styled.section`
  margin-right: 10px;
`;
export { StyledLink, Arrow, Section };
