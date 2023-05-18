import { useSelector } from 'react-redux';

import {
  HeaderImage,
  HeaderName,
  HomeHeader,
  ImageHeaderContainer,
} from './HeaderPageStyle';

import { selectIsAvatar, selectIsName } from 'redux/selectors';

const HeaderPage = () => {
  const userAvatar = useSelector(selectIsAvatar);
  const userName = useSelector(selectIsName);

  return (
    <HomeHeader>
      <ImageHeaderContainer>
        <HeaderImage src={userAvatar} />
      </ImageHeaderContainer>
      <HeaderName>{userName}</HeaderName>
    </HomeHeader>
  );
};

export default HeaderPage;
