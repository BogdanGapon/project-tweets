import styled from 'styled-components';

const LoadMoreButton = styled.button`
  display: block;
  width: 150px;
  height: 30px;
  margin: 26px auto 26px;
  padding: 8px 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: rgba(235, 216, 255, 0.8);
  }
`;

export { LoadMoreButton };
