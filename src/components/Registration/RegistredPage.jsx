import { useDispatch } from 'react-redux';
import { useState } from 'react';

import primaryFone from '../../images/picture_fon.png';
import logoImage from '../../images/Logo.png';

import {
  Input,
  InputForm,
  InputLabel,
  RegisterContainer,
  RegisterTitle,
  ButtonRegister,
  ButtonNavigateReg,
} from './RegistredPageStyles';
import shortid from 'shortid';
import { register } from 'redux/authOperations';
import { useNavigate } from 'react-router-dom';
import { FoneImage, LogoImage } from 'components/Login/LoginPageStyles';

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
    <RegisterContainer>
      <FoneImage src={primaryFone} alt="fon" />
      <LogoImage src={logoImage} alt="logo GoIT" />
      <RegisterTitle>Registration</RegisterTitle>
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
    </RegisterContainer>
  );
};

export default RegisterPage;
