import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuthHeader } from 'utility/auxiliaryFunctions';

// const { REACT_APP_BASE_URL } = process.env;
// axios.defaults.baseURL = REACT_APP_BASE_URL;

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const authRegister = createAsyncThunk(
  '/auth/register',
  async (user, thunkApi) => {
    try {
      const resp = await axios.post('/auth/register', user);
      return resp.data;
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
      const resp = await axios.post('/auth/login', user);
      setAuthHeader(resp.data.accessToken);
      return resp.data;
    } catch (error) {
      alert(error.response.data.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logOutUser = createAsyncThunk(
  '/auth/logout',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const resp = await axios.post('/auth/logout');
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (sid, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.refreshToken;
      setAuthHeader(token);
      const resp = await axios.post('/auth/refresh', { sid: sid });
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
