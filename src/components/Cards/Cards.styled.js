import styled from 'styled-components';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const CardItem = styled.li`
  position: relative;
  display: block;
  max-width: 360px;
  height: 480px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const Logo = styled.img`
  padding-top: 20px;
  padding-left: 20px;
`;
const MainImg = styled.img`
  margin-left: 30px;
  background: transparent;
`;

const RightLane = styled.span`
  display: inline-block;
  margin-top: 18px;
  width: 145px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

const Circle = styled.span`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-color: transparent;
  overflow: hidden;
`;
const Avatar = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const LeftLine = styled.span`
  display: inline-block;
  margin-top: 18px;
  margin-left: 70px;
  width: 145px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

const TextTweets = styled.p`
  margin-top: 62px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

const TextFollowers = styled(TextTweets)`
  margin-top: 16px;
`;

const Button = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  margin: 26px auto 0;
  padding: 14px 28px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(235, 216, 255, 0.8);
  }
`;

export {
  CardItem,
  Logo,
  MainImg,
  RightLane,
  Circle,
  LeftLine,
  TextTweets,
  TextFollowers,
  Button,
  Avatar,
  CardList,
};
