import axios from 'axios';
import { toast } from 'react-toastify';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://prepare-test-api-service.onrender.com/api';

export const getUsers = createAsyncThunk(
  'users/getting',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/user/?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('users not found');
        return rejectWithValue(error.message);
      }
      toast.error('users not found');
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSubscribeFollowers = createAsyncThunk(
  'users/Subscribe',
  async ({ _id, userId, rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/user/following/${_id}`, {
        _id: userId,
      });

      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('users not found');
        return rejectWithValue(error.message);
      }
      toast.error('users not found');
      return rejectWithValue(error.message);
    }
  }
);
