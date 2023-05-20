import { useDispatch } from 'react-redux';
import { useState } from 'react';

import primaryFone from '../../images/picture_fon.png';
import logoImage from '../../images/Logo.png';

import {
  Input,
  InputForm,
  InputLabel,
  LoginContainer,
  LoginTitle,
  ButtonLogin,
  ButtonNavigateLogin,
  FoneImage,
  LogoImage,
} from './LoginPageStyles';
import shortid from 'shortid';
import { login } from 'redux/authOperations';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const userInputId = shortid.generate();

  const handleChange = ({ target }) => {
    return setUser(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ user: user }));
    setUser('');
  };

  return (
    <LoginContainer>
      <FoneImage src={primaryFone} alt="fon" />
      <LogoImage src={logoImage} alt="logo GoIT" />
      <LoginTitle>Login</LoginTitle>
      <InputForm onSubmit={handleSubmit} autoComplete="off">
        <InputLabel htmlFor="userInputId">
          <Input
            type="text"
            name="user"
            value={user}
            onChange={handleChange}
            id={userInputId}
          />
        </InputLabel>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </InputForm>
      <ButtonNavigateLogin
        type="button"
        onClick={() => {
          navigation('/register');
        }}
      >
        no account? register
      </ButtonNavigateLogin>
    </LoginContainer>
  );
};

export default LoginPage;
