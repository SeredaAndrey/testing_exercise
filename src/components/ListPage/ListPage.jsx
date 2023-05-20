import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsFollowing,
  selectIsLoading,
  selectIsUserId,
} from 'redux/authSelectors';
import ListItem from './ListItem';
import {
  BodyContainer,
  ButtonMore,
  ButtonMoreContainer,
  ListContainer,
  PaginationNumber,
  PaginationText,
} from './ListPageStyles';
import { fetchSubscribeFollowers, getUsers } from 'redux/usersOperators';
import {
  selectInCount,
  selectInCountInPage,
  selectInPage,
  selectIsUsers,
} from 'redux/usersSelectors';

const ListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const following = useSelector(selectIsFollowing);
  const userId = useSelector(selectIsUserId);
  const users = useSelector(selectIsUsers);
  const page = useSelector(selectInPage);
  const count = useSelector(selectInCount);
  const countInPage = useSelector(selectInCountInPage);

  useEffect(() => {
    if (!page) {
      const fetchData = async () => {
        dispatch(getUsers({ page: 1, limit: 3 }));
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkForFollowed = _id => {
    for (const id of following) {
      if (_id === id) return true;
    }
    return false;
  };

  const onClickFollowers = async _id => {
    dispatch(fetchSubscribeFollowers({ _id, userId }));
  };

  const onClickMore = () => {
    if (Math.ceil(count / 3) < page + 1) {
      return;
    } else {
      dispatch(getUsers({ page: page + 1, limit: 3 }));
    }
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
                followingFlag={checkForFollowed(_id)}
                onClickFollowers={onClickFollowers}
              />
            );
          })}
        </ListContainer>
      ) : (
        <p>Loading...</p>
      )}
      <ButtonMoreContainer>
        <ButtonMore type="button" onClick={onClickMore}>
          Load more
        </ButtonMore>
        <PaginationText>
          loading{' '}
          <PaginationNumber>
            {page * countInPage}/{count}
          </PaginationNumber>
        </PaginationText>
      </ButtonMoreContainer>
    </BodyContainer>
  );
};

export default ListPage;
