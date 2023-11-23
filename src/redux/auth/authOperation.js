import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'utility/auxiliaryFunctions';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const authRegister = createAsyncThunk(
  '/auth/register',
  async (user, thunkApi) => {
    try {
      const res = await axios.post('/auth/register', user);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const authLogin = createAsyncThunk(
  '/auth/login',
  async (user, thunkApi) => {
    try {
      const res = await axios.post('/auth/login', user);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const response = await axios.post('/auth/logout');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (sid, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.refreshToken;
      setAuthHeader(token);
      const response = await axios.post('/auth/refresh', { sid: sid });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
