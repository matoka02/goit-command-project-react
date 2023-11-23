import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'utility/auxiliaryFunctions';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const calculateDailyRate = createAsyncThunk(
  '/daily-rate',
  async (data, thunkApi) => {
    try {
      const res = await axios.post('/daily-rate', data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const calculateDailyRateForSignUser = createAsyncThunk(
  '/daily-rate/userId',
  async ({ userId, dataUser }, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const res = await axios.post(`/daily-rate/${userId}`, dataUser);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk('/user', async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state.auth.token;
    setAuthHeader(token);
    const { data } = await axios.get('/user');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getInfoDay = createAsyncThunk(
  '/day/info',
  async (dataDay, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const { data } = await axios.post('/day/info', dataDay);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  '/day',
  async (dataProduct, thunkApi) => {
    try {
      const { data } = await axios.post('/day', dataProduct);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  '/delete',
  async (dataProduct, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const { data } = await axios.delete('/day', { data: dataProduct });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
