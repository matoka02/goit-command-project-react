import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  calculateDailyRate,
  calculateDailyRateForSignUser,
  deleteProduct,
  getCurrentUser,
  getInfoDay,
} from './userDataOperation';

const initialState = {
  user: null,
  data: null,
  userSummary: { eatenProducts: [], date: '', daySummary: {}, id: '' },
  modalOpen: false,
  modalData: [],
  isLoading: false,
  error: '',
};
const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    modalOpen(state, action) {
      state.modalOpen = true;
    },
    modalClose(state, action) {
      state.modalOpen = false;
    },
    setDataCalendar(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(calculateDailyRate.pending, pendingHandlerAuth);
    builder.addCase(calculateDailyRate.rejected, rejectedHandler);
    builder.addCase(calculateDailyRate.fulfilled, (state, action) => {
      state.modalData = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(calculateDailyRateForSignUser.pending, pendingHandlerAuth);
    builder.addCase(calculateDailyRateForSignUser.rejected, rejectedHandler);
    builder.addCase(
      calculateDailyRateForSignUser.fulfilled,
      (state, action) => {
        state.user.userData.dailyRate = action.payload.dailyRate;
        state.isLoading = false;
        state.error = '';
      }
    );
    builder.addCase(getCurrentUser.pending, pendingHandlerAuth);
    builder.addCase(getCurrentUser.rejected, rejectedHandler);
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(getInfoDay.pending, pendingHandlerAuth);
    builder.addCase(getInfoDay.rejected, rejectedHandler);
    builder.addCase(getInfoDay.fulfilled, (state, action) => {
      state.userSummary = {
        id: action.payload.id,
        eatenProducts: action.payload.eatenProducts,
        daySummary: action.payload.daySummary,
        date: action.payload.data,
      };
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(addProduct.pending, pendingHandlerAuth);
    builder.addCase(addProduct.rejected, rejectedHandler);
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.userSummary = {
        id: action.payload?.newDay?.id
          ? action.payload.newDay.id
          : action.payload?.day?.id,
        eatenProducts: action.payload?.newDay?.eatenProducts
          ? action.payload.newDay.eatenProducts
          : action.payload?.day?.eatenProducts,
        daySummary: action.payload?.newSummary
          ? action.payload.newSummary
          : action.payload?.daySummary,
        date: action.payload?.newDay?.date
          ? action.payload?.newDay.date
          : action.payload?.day?.date,
      };
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(deleteProduct.pending, pendingHandlerAuth);
    builder.addCase(deleteProduct.rejected, rejectedHandler);
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.userSummary.daySummary = action.payload.newDaySummary;
      state.isLoading = false;
      state.error = '';
    });
  },
});
export const { modalOpen, modalClose, setDataCalendar } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
