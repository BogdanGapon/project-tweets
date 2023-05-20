import {
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
} from './Card.styled';
import { fetchUsers, putUsers } from '../../Helpers/fetch';
import { useEffect, useRef, useState } from 'react';
import { LoadMore } from '../LoadMore/LoadMore';

export const Card = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    fetchUsers().then(respond => {
      setUsers([...respond]);
      console.log(`user in fetch`);
    });
  }, [setUsers]);

  useEffect(() => {
    console.log('users in useEffect');
    users.forEach(user => {
      if (user.isFollowing) {
        user.followers += 1;
      }
      if (user.isFollowing) {
        user.followers += 1;
      }
    });
  }, [users]);

  const onClickFollow = (id, e) => {
    // const button = e.currentTarget;

    setUsers(prevState => {
      prevState
        .filter(user => user.id === id)
        .map(user => {
          console.log(user.isFollowing);
          if (user.isFollowing) {
            // button.textContent = 'Following';
            // button.style.backgroundColor = '#5cd3a8';

            // user.followers += 1;
            user.isFollowing = false;
          } else if (!user.isFollowing) {
            // button.textContent = 'Follow';
            // button.style.backgroundColor = '#ebd8ff';
            // user.followers -= 1;
            user.isFollowing = true;
          }
          putUsers(id, user);
          return user;
        });

      return [...prevState];
    });
  };

  const onClickLoadMore = e => {
    setShowUsers(prevState => !prevState);
  };
  return (
    <>
      <CardList>
        {users.map(user => {
          console.log(`user in map`);
          const { tweets, avatar, id } = user;
          const followers = user.followers.toLocaleString('en-US');

          return (
            <CardItem key={id}>
              <Logo src="/src/Images/Logo.png" alt="logo"></Logo>
              <MainImg src="/src/Images/picture2 1.png" alt="picture" />
              <RightLane></RightLane>
              <Circle>
                <Avatar src={avatar.url} alt="Avatar" />
              </Circle>
              <LeftLine></LeftLine>
              <TextTweets>{tweets} Tweets</TextTweets>
              <TextFollowers>{followers} Followers</TextFollowers>
              <Button
                onClick={e => onClickFollow(id, e)}
                ref={button}
                users={users}
              >
                Follow
              </Button>
            </CardItem>
          );
        })}
      </CardList>
      <LoadMore load={onClickLoadMore} isLoaded={showUsers} />
    </>
  );
};

/* <CardList>
{showUsers
  ? users.map(user => {
      const { tweets, avatar, id } = user;
      const followers = user.followers.toLocaleString('en-US');
      return (
        <CardItem key={id}>
          <Logo src="/src/Images/Logo.png" alt="logo"></Logo>
          <MainImg src="/src/Images/picture2 1.png" alt="picture" />
          <RightLane></RightLane>
          <Circle>
            <Avatar src={avatar.url} alt="Avatar" />
          </Circle>
          <LeftLine></LeftLine>
          <TextTweets>{tweets} Tweets</TextTweets>
          <TextFollowers>{followers} Followers</TextFollowers>
          <Button onClick={e => onClickFollow(id, e)}>Follow</Button>
        </CardItem>
      );
    })
  : users.slice(0, 3).map(user => {
      const { tweets, avatar, id } = user;
      const followers = user.followers.toLocaleString('en-US');
      return (
        <CardItem key={id}>
          <Logo src="/src/Images/Logo.png" alt="logo"></Logo>
          <MainImg src="/src/Images/picture2 1.png" alt="picture" />
          <RightLane></RightLane>
          <Circle>
            <Avatar src={avatar.url} alt="Avatar" />
          </Circle>
          <LeftLine></LeftLine>
          <TextTweets>{tweets} Tweets</TextTweets>
          <TextFollowers>{followers} Followers</TextFollowers>
          <Button onClick={e => onClickFollow(id, e)}>Follow</Button>
        </CardItem>
      );
    })}
</CardList> */
