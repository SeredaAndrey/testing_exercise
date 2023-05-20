import { ThemeProvider } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route
            path="/home"
            element={
              <RestrictedRoute redirectTo="/" component={<HomePage />} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          ></Route>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute redirectTo="/home" component={<HomePage />} />
              }
            ></Route>
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to={location.state?.from ?? redirectTo} />
  ) : (
    Component
  );
};

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const shoudRedirect = !isLoggedIn;

  return shoudRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
};
