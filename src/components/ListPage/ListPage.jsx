import { fetchUsers } from 'ApiService/ApiService';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/selectors';
import ListItem from './ListItem';
import { BodyContainer, ListContainer } from './ListPageStyles';

const ListPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUsers();
      console.log('usersData: ', usersData);
      setUsers(usersData.users);
      return usersData;
    };
    fetchData();
  }, []);

  console.log('users: ', users);

  return (
    <BodyContainer>
      {isLoading && <p>Loading...</p>}
      {users.lenght !== 0 ? (
        <ListContainer>
          {users.map(({ _id, user, avatar }) => {
            return <ListItem _id={_id} user={user} avatar={avatar} />;
          })}
        </ListContainer>
      ) : (
        <p>Loading...</p>
      )}
    </BodyContainer>
  );
};

export default ListPage;
