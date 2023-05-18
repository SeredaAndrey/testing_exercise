import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  Input,
  InputForm,
  InputLabel,
  LoginContainer,
  LoginTitle,
  Button,
  Text,
  FoneImage,
} from './LoginPageStyles';
import shortid from 'shortid';
import { login } from 'redux/operations';

const LoginPage = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

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
      <FoneImage src="../images/picture_fon.png" alt="fon" />
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
        <Button type="submit">Login</Button>
      </InputForm>
      <Text>no account? register</Text>
    </LoginContainer>
  );
};

export default LoginPage;
