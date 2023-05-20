import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  Input,
  InputForm,
  InputLabel,
  LoginContainer,
  LoginTitle,
  ButtonRegister,
  ButtonNavigateReg,
} from './RegistredPageStyles';
import shortid from 'shortid';
import { register } from 'redux/authOperations';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigate();

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
        <ButtonRegister type="submit">Registration</ButtonRegister>
      </InputForm>
      <ButtonNavigateReg
        type="button"
        onClick={() => {
          navigation('/login');
        }}
      >
        have an account? log in
      </ButtonNavigateReg>
    </LoginContainer>
  );
};

export default RegisterPage;
