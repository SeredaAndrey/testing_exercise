import {
  fetchSubscribeFollowers,
  fetchUserData,
  fetchUsers,
} from 'ApiService/ApiService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsFollowing,
  selectIsLoading,
  selectIsUserId,
} from 'redux/selectors';
import ListItem from './ListItem';
import { BodyContainer, ListContainer } from './ListPageStyles';

const ListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const following = useSelector(selectIsFollowing);
  const userId = useSelector(selectIsUserId);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData.users);
      return usersData;
    };
    fetchData();
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch(fetchUserData(userId));
  //   };
  //   fetchData();
  // }, []);

  const checkForFollowed = _id => {
    for (const id of following) {
      if (_id === id) return id;
    }
    return false;
  };

  const onClickFollowers = async _id => {
    await dispatch(fetchSubscribeFollowers(_id, userId));
  };

  return (
    <BodyContainer>
      {isLoading && <p>Loading...</p>}
      {users.length !== 0 ? (
        <ListContainer>
          {users.map(({ _id, user, avatar, followers, tweets }) => {
            return (
              <ListItem
                _id={_id}
                user={user}
                avatar={avatar}
                followers={followers}
                tweets={tweets}
                following={checkForFollowed(_id)}
                onClickFollowers={onClickFollowers}
              />
            );
          })}
        </ListContainer>
      ) : (
        <p>Loading...</p>
      )}
    </BodyContainer>
  );
};

export default ListPage;
