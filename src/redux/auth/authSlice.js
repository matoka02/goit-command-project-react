import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { authLogin, authRegister, logOutUser, refreshUser } from './authOperation';
import initialState from './authInitialState';

// const initialState = {
//   user: {
//     email: '',
//     password: '',
//     userName: '',
//     id: null,
//     sid: null,
//   },
//   isLoggedIn: false,
//   isSideBarOpen: false,
//   isLoading: false,
//   token: '',
//   refreshToken: '',
//   prevToken: '',
//   error: '',
// };

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const userDataArr = [authRegister, authLogin, logOutUser, refreshUser];

const fn = status => userDataArr.map(el => el[status]);

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authRegisterFulfilled = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.user = {
    ...state.user,
    email: payload.email,
    password: payload.password,
    userName: payload.username,
    id: payload.id,
  };
  state.isLoading = false;
  state.error = '';
};

const authLoginFulfilled = (state, { payload }) => {
  state.user = {
    ...state.user,
    email: payload.user.email,
    password: payload.user.password,
    userName: payload.user.username,
    id: payload.user.id,
    sid: payload.sid,
  };
  state.refreshToken = payload.refreshToken;
  state.token = payload.accessToken;
  state.isLoading = false;
  state.error = '';
  state.isLoggedIn = true;
};

const logOutUserFulfilled = (state, action) => {
  state.user = {
    email: '',
    password: '',
    userName: '',
    id: null,
    sid: null,
  };
  state.isLoading = false;
  state.token = null;
  state.error = '';
  state.isLoggedIn = false;
};

const refreshUserFulfilled = (state, { payload }) => {
  state.user = { ...state.user, sid: payload.sid };
  state.token = payload.newAccessToken;
  state.refreshToken = payload.newRefreshToken;
  state.isLoading = false;
  state.error = '';
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isSideBarOpen = true;
    },
    closeModal(state, action) {
      state.isSideBarOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authRegister.fulfilled, authRegisterFulfilled)
      .addCase(authLogin.fulfilled, authLoginFulfilled)
      .addCase(logOutUser.fulfilled, logOutUserFulfilled)
      .addCase(refreshUser.fulfilled, refreshUserFulfilled)
      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
