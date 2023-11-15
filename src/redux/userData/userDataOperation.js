import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuthHeader } from 'utility/auxiliaryFunctions';

// const { REACT_APP_BASE_URL } = process.env;
// axios.defaults.baseURL = REACT_APP_BASE_URL;

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const calculateDailyRate = createAsyncThunk(
  '/daily-rate',
  async (data, thunkApi) => {
    try {
      const resp = await axios.post('/daily-rate', data);
      return resp.data;
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
      const resp = await axios.post(`/daily-rate/${userId}`, dataUser);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  '/user',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const { data } = await axios.get(`/user`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getInfoDay = createAsyncThunk(
  '/day/info',
  async (dataDay, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const { data } = await axios.post(`/day/info`, dataDay);
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