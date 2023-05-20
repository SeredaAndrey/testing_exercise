import {
  ButtonListItem,
  InnerListItemBox1,
  InnerListItemBox2,
  InnerListItemBox3,
  ListPageLogo,
  ListsItem,
  PhotoListItem,
  PhotoListItemBox,
  TextFollowListItem,
  TextTwitsListItem,
} from './ListPageStyles';

import goitLogo from '../../images/Logo.png';

import imgHuman from '../../images/human.png';

const ListItem = ({
  _id,
  user,
  avatar,
  followers,
  tweets,
  followingFlag,
  onClickFollowers,
}) => {
  return (
    <ListsItem>
      <InnerListItemBox1>
        <ListPageLogo src={goitLogo} alt="GoIT" />
      </InnerListItemBox1>
      <InnerListItemBox2>
        <PhotoListItemBox>
          <PhotoListItem src={avatar ? avatar : imgHuman} alt={user} />
        </PhotoListItemBox>
      </InnerListItemBox2>
      <InnerListItemBox3>
        <TextTwitsListItem>
          {tweets >= 1000 ? (tweets / 1000).toFixed(3) : tweets} Twits
        </TextTwitsListItem>
        <TextFollowListItem>
          {followers >= 1000 ? (followers / 1000).toFixed(3) : followers}{' '}
          Followers
        </TextFollowListItem>
        <ButtonListItem
          type="button"
          followingFlag={followingFlag}
          onClick={() => {
            onClickFollowers(_id, followingFlag);
          }}
        >
          {followingFlag ? 'Following' : 'Follow'}
        </ButtonListItem>
      </InnerListItemBox3>
    </ListsItem>
  );
};

export default ListItem;
