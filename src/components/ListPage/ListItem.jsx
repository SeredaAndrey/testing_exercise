import { ListsItem } from './ListPageStyles';

const ListItem = ({ _id, user, avatar }) => {
  return (
    <ListsItem>
      <p>{user}</p>
      <p>{avatar}</p>
      <p>{_id}</p>
    </ListsItem>
  );
};

export default ListItem;
