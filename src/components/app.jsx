import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import {
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/selectors';

import { theme } from 'theme';

import RegisterPage from './Registration/RegistredPage';
import LoginPage from './Login/LoginPage';
import HomePage from './Home/home';
import SharedLayout from './Shared/shared';

export const App = () => {
  const isRefreshing = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  return (
    <ThemeProvider theme={theme}>
      {isRefreshing || isLoading ? (
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
  const isRefreshing = useSelector(selectIsRefreshing);
  const location = useLocation();

  const shoudRedirect = !isLoggedIn && !isRefreshing;

  return shoudRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
};
