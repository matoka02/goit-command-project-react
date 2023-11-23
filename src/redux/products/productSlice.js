import { searchByQueryProduct } from './productsOperation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  productsSearch: [],
  mobileFormAddProductsOpen: false,
  isLoading: false,
  error: '',
};
const pendingHandler = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
    builder.addCase(searchByQueryProduct.pending, pendingHandler);
    builder.addCase(searchByQueryProduct.rejected, rejectedHandler);
    builder.addCase(searchByQueryProduct.fulfilled, (state, action) => {
      state.productsSearch = action.payload.data;
      state.isLoading = false;
      state.isError = '';
    });
  },
});

export const { setMobileFormAddProductsClose, setMobileFormAddProductsOpen } =
  productsSlice.actions;
export const productReducer = productsSlice.reducer;
