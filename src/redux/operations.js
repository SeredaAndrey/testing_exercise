import axios from 'axios';
import { toast } from 'react-toastify';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://prepare-test-api-service.onrender.com/api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user', credentials);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('This email already exists');
        return rejectWithValue(error.message);
      }
      toast.error('This email already exists');
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/login', credentials);
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

export const logout = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    return { status: 'ok' };
  }
);
