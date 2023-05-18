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
} from './RegistredPageStyles';
import shortid from 'shortid';
import { register } from 'redux/operations';

const RegisterPage = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const userInputId = shortid.generate();

  const handleChange = ({ target }) => {
    return setUser(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ user: user }));
    setUser('');
  };

  return (
    <LoginContainer>
      <LoginTitle>Registration</LoginTitle>
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
        <Button type="submit">Registration</Button>
      </InputForm>
      <Text>have an account? log in</Text>
    </LoginContainer>
  );
};

export default RegisterPage;
