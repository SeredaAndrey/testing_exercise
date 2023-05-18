import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register } from './operations';

const initialState = {
  name: null,
  avatarUrl: null,
  userId: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      //registration
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userId = payload._id;
        state.user = payload.user;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //login
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log('payload: ', payload);
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userId = payload.data._id;
        state.name = payload.data.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //logout
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userId = null;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
