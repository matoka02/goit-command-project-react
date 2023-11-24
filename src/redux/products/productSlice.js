import { createSlice } from '@reduxjs/toolkit';

import { searchByQueryProduct } from './productOperation';
import initialState from './productInitialState';

// const initialState = {
//   productsSearch: [],
//   mobileFormAddProductsOpen: false,
//   isLoading: false,
//   error: '',
// };

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const searchByQueryProductFulfilled = (state, { payload }) => {
  state.productsSearch = payload.data;
  state.isLoading = false;
  state.isError = '';
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setMobileFormAddProductsOpen(state, action) {
      state.mobileFormAddProductsOpen = true;
    },
    setMobileFormAddProductsClose(state, action) {
      state.mobileFormAddProductsOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchByQueryProduct.pending, handlePending)
      .addCase(searchByQueryProduct.rejected, handleRejected)
      .addCase(searchByQueryProduct.fulfilled, searchByQueryProductFulfilled);
  },
});

export const { setMobileFormAddProductsClose, setMobileFormAddProductsOpen } =
  productsSlice.actions;
export const productReducer = productsSlice.reducer;
