import { useSelector } from 'react-redux';

import {
  HeaderImage,
  HeaderName,
  HomeHeader,
  ImageHeaderContainer,
  InneerHeaderContainer1,
  InneerHeaderContainer2,
  InneerHeaderContainer3,
} from './HeaderPageStyle';

import { selectIsAvatar, selectIsName } from 'redux/selectors';

const HeaderPage = () => {
  const userAvatar = useSelector(selectIsAvatar);
  const userName = useSelector(selectIsName);

  return (
    <HomeHeader>
      <InneerHeaderContainer1>
        <HeaderName>{userName}</HeaderName>
      </InneerHeaderContainer1>
      <InneerHeaderContainer2>
        <ImageHeaderContainer>
          <HeaderImage src={userAvatar} alt={userName} />
        </ImageHeaderContainer>
      </InneerHeaderContainer2>
      <InneerHeaderContainer3></InneerHeaderContainer3>
    </HomeHeader>
  );
};

export default HeaderPage;
