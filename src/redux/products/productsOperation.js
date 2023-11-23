import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'utility/auxiliaryFunctions';

export const searchByQueryProduct = createAsyncThunk(
  '/product',
  async (productValue, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const response = axios.get('/product', { params: productValue });
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
