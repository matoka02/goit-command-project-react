import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { addProduct, calculateDailyRate, calculateDailyRateForSignUser, deleteProduct, getCurrentUser, getInfoDay } from './userDataOperation';
import initialState from './userDataInitialState';

// const initialState = {
//   user: null,
//   data: null,
//   userSummary: { eatenProducts: [], date: '', daySummary: {}, id: '' },
//   modalOpen: false,
//   modalData: [],
//   isLoading: false,
//   error: '',
// };

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const userDataArr = [calculateDailyRate, calculateDailyRateForSignUser, getCurrentUser, getInfoDay, addProduct, deleteProduct];

const fn = status => userDataArr.map(el => el[status]);

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const calculateDailyRateFulfilled = (state, { payload }) => {
  state.modalData = payload;
  state.isLoading = false;
  state.error = '';
};

const calculateDailyRateForSignUserFulfilled = (state, { payload }) => {
  state.user.userData.dailyRate = payload.dailyRate;
  state.isLoading = false;
  state.error = '';
};

const getCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoading = false;
  state.error = '';
};

const getInfoDayFulfilled = (state, { payload }) => {
  state.userSummary = {
    id: payload.id,
    eatenProducts: payload.eatenProducts,
    daySummary: payload.daySummary,
    date: payload.data,
  };
  state.isLoading = false;
  state.error = '';
};

const addProductFulfilled = (state, { payload }) => {
  state.userSummary = {
    id: payload?.newDay?.id ? payload.newDay.id : payload?.day?.id,
    eatenProducts: payload?.newDay?.eatenProducts ? payload.newDay.eatenProducts : payload?.day?.eatenProducts,
    daySummary: payload?.newSummary ? payload.newSummary : payload?.daySummary,
    date: payload?.newDay?.date ? payload?.newDay.date : payload?.day?.date,
  };
  state.isLoading = false;
  state.error = '';
};

const deleteProductFulfilled = (state, { payload }) => {
  state.userSummary.daySummary = payload.newDaySummary;
  state.isLoading = false;
  state.error = '';
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
    setDataCalendar(state, { payload }) {
      state.data = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(calculateDailyRate.fulfilled, calculateDailyRateFulfilled)
      .addCase(calculateDailyRateForSignUser.fulfilled, calculateDailyRateForSignUserFulfilled)
      .addCase(getCurrentUser.fulfilled, getCurrentUserFulfilled)
      .addCase(getInfoDay.fulfilled, getInfoDayFulfilled)
      .addCase(addProduct.fulfilled, addProductFulfilled)
      .addCase(deleteProduct.fulfilled, deleteProductFulfilled)
      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
  },
});

export const { modalOpen, modalClose, setDataCalendar } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
