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
} from './Cards.styled';
import { fetchUsers, putUsers } from '../../Helpers/fetch';
import { useEffect, useState } from 'react';
import { LoadMore } from '../LoadMore/LoadMore';
import MainImage from '/src/Images/picture2 1.png';
import LogoImg from '/src/Images/Logo.png';
export const Cards = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setShowButton(false);
    fetchUsers()
      .then(respond => {
        setUsers(respond);
      })
      .finally(() => {
        setShowButton(true);
      });
  }, [setUsers]);

  const onClickFollow = id => {
    const user = users.find(user => user.id === id);

    if (!user) {
      console.error('no user');
      return;
    }
    let followers = user.followers;
    let isFollowing = user.isFollowing;
    if (isFollowing) {
      followers -= 1;
      isFollowing = false;
    } else if (!isFollowing) {
      followers += 1;
      isFollowing = true;
    }

    putUsers(id, { ...user, isFollowing, followers })
      .then(res => {
        return fetchUsers();
      })
      .then(users => {
        setUsers(users);
      });
  };

  const onClickLoadMore = () => {
    setShowUsers(prevState => !prevState);
  };
  return (
    <>
      <CardList>
        {showUsers
          ? users.map(user => {
              const { tweets, avatar, id, isFollowing } = user;
              const followers = user.followers.toLocaleString('en-US');

              return (
                <CardItem key={id}>
                  <Logo src={LogoImg} alt="logo"></Logo>
                  <MainImg src={MainImage} alt="picture" />
                  <RightLane></RightLane>
                  <Circle>
                    <Avatar src={avatar.url} alt="Avatar" />
                  </Circle>
                  <LeftLine></LeftLine>
                  <TextTweets>{tweets} Tweets</TextTweets>
                  <TextFollowers>{followers} Followers</TextFollowers>
                  <Button
                    style={{
                      backgroundColor: isFollowing ? '#5CD3A8' : '#ebd8ff',
                    }}
                    onClick={e => onClickFollow(id)}
                    users={users}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </CardItem>
              );
            })
          : users.slice(0, 3).map(user => {
              const { tweets, avatar, id, isFollowing } = user;
              const followers = user.followers.toLocaleString('en-US');

              return (
                <CardItem key={id}>
                  <Logo src={LogoImg} alt="logo"></Logo>
                  <MainImg src={MainImage} alt="picture" />
                  <RightLane></RightLane>
                  <Circle>
                    <Avatar src={avatar.url} alt="Avatar" />
                  </Circle>
                  <LeftLine></LeftLine>
                  <TextTweets>{tweets} Tweets</TextTweets>
                  <TextFollowers>{followers} Followers</TextFollowers>
                  <Button
                    style={{
                      backgroundColor: isFollowing ? '#5cd3a8' : '#ebd8ff',
                    }}
                    onClick={e => onClickFollow(id)}
                    users={users}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </CardItem>
              );
            })}
      </CardList>
      {showButton ? (
        <LoadMore load={onClickLoadMore} isLoaded={showUsers} />
      ) : (
        <div>Loading content, please wait</div>
      )}
    </>
  );
};
