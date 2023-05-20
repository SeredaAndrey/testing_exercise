import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'https://prepare-test-api-service.onrender.com/api';

export const fetchUserData = createAsyncThunk(
  'user/loadData',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/user/${userId}`);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Email or password is wrong');
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
