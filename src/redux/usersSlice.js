import { createSlice } from '@reduxjs/toolkit';
import { fetchSubscribeFollowers, getUsers } from './usersOperators';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  count: null,
  countInPage: null,
  page: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      //getUsersInfo
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.count = parseInt(payload.count);
        state.countInPage = parseInt(payload.countInPage);
        if (state.page === parseInt(payload.page)) {
          state.users = payload.users;
        } else {
          state.users.push(...payload.users);
        }
        state.page = parseInt(payload.page);
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //pathUserSubscribe
      .addCase(fetchSubscribeFollowers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSubscribeFollowers.fulfilled, (state, { payload }) => {
        const index = state.users.findIndex(
          user => user._id === payload.data._id
        );
        state.users[index].followers = payload.data.followers;
        state.isLoading = false;
      })
      .addCase(fetchSubscribeFollowers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReduser = usersSlice.reducer;
