import { ThemeProvider } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { Circles } from 'react-loader-spinner';

import {
  selectIsLoading,
  selectIsLoggedIn,
  selectIsUserId,
} from 'redux/authSelectors';

import { theme } from 'theme';

import RegisterPage from './Registration/RegistredPage';
import LoginPage from './Login/LoginPage';
import HomePage from './Home/HomePage';
import SharedLayout from './Shared/shared';
import { fetchUserData } from 'ApiService/ApiService';
import { SpinnerContainer } from './appStyled';

export const App = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectIsUserId);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUserData(userId));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <SpinnerContainer>
          <Circles
            height="80"
            width="80"
            color="#EBD8FF"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </SpinnerContainer>
      ) : (
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/" component={<RegisterPage />} />
            }
          ></Route>
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
          ></Route>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            ></Route>
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            ></Route>
            <Route
              path="*"
              element={
                <PublicRoute redirectTo="/login" component={<HomePage />} />
              }
            ></Route>
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const shoudRedirect = !isLoggedIn;

  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
};
