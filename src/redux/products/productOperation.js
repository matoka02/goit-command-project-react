import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuthHeader } from 'utility/auxiliaryFunctions';

export const searchByQueryProduct = createAsyncThunk(
  '/product',
  async (productValue, thunkApi) => {
    try {
      const state=thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const resp = await axios.get('/product', {params: productValue});
      return resp;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);