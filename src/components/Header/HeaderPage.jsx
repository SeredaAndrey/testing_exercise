import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import {
  HeaderImage,
  HeaderName,
  HomeHeader,
  ImageHeaderContainer,
  InneerHeaderContainer1,
  InneerHeaderContainer2,
  InneerHeaderContainer3,
  LogoutIco,
} from './HeaderPageStyle';

import { selectIsAvatar, selectIsName } from 'redux/authSelectors';
import { logout } from 'redux/authOperations';

const HeaderPage = () => {
  const userAvatar = useSelector(selectIsAvatar);
  const userName = useSelector(selectIsName);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigation('/login');
  };

  return (
    <HomeHeader>
      <InneerHeaderContainer1>
        <HeaderName>{userName}</HeaderName>
      </InneerHeaderContainer1>
      <InneerHeaderContainer2>
        <ImageHeaderContainer>
          <HeaderImage
            src={userAvatar ? userAvatar : '../../images/human.png'}
            alt={userName}
          />
        </ImageHeaderContainer>
      </InneerHeaderContainer2>
      <InneerHeaderContainer3>
        <LogoutIco onClick={onLogout}>
          <FiLogOut />
        </LogoutIco>
      </InneerHeaderContainer3>
    </HomeHeader>
  );
};

export default HeaderPage;
