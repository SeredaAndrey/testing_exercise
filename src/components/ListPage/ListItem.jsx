import {
  ButtonListItem,
  InnerListItemBox1,
  InnerListItemBox2,
  InnerListItemBox3,
  ListsItem,
  PhotoListItem,
  PhotoListItemBox,
  TextFollowListItem,
  TextTwitsListItem,
} from './ListPageStyles';

const ListItem = ({
  _id,
  user,
  avatar,
  followers,
  tweets,
  following,
  onClickFollowers,
}) => {
  return (
    <ListsItem>
      <InnerListItemBox1></InnerListItemBox1>
      <InnerListItemBox2>
        <PhotoListItemBox>
          <PhotoListItem src={avatar} alt={user} />
        </PhotoListItemBox>
      </InnerListItemBox2>
      <InnerListItemBox3>
        <TextTwitsListItem>{tweets} Twits</TextTwitsListItem>
        <TextFollowListItem>{followers} Followers</TextFollowListItem>
        <ButtonListItem
          type="button"
          following={following}
          onClick={() => {
            onClickFollowers(_id);
          }}
        >
          {following ? 'Following' : 'Follow'}
        </ButtonListItem>
      </InnerListItemBox3>
    </ListsItem>
  );
};

export default ListItem;
