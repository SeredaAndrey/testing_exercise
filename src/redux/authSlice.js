import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register } from './authOperations';
import { fetchUserData } from 'ApiService/ApiService';
import { fetchSubscribeFollowers } from './usersOperators';

const initialState = {
  name: null,
  avatarUrl: null,
  userId: null,
  following: [],
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
        state.userId = payload.data._id;
        state.name = payload.data.user;
        state.following = payload.data.following;
        state.avatarUrl = payload.data.avatar;
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
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userId = payload.data._id;
        state.name = payload.data.user;
        state.following = payload.data.following;
        state.avatarUrl = payload.data.avatar;
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
        state.name = null;
        state.avatarUrl = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //LoadUserData
      .addCase(fetchUserData.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.name = payload.user.user;
        state.following = payload.user.following;
        state.avatarUrl = payload.user.avatar;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchSubscribeFollowers.fulfilled, (state, { payload }) => {
        const index = state.following.findIndex(id => id === payload.data._id);
        if (index >= 0) {
          state.following.splice(index, 1);
        } else {
          state.following.push(payload.data._id);
        }
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
