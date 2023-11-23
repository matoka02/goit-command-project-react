import { createSlice } from '@reduxjs/toolkit';
import {
  authLogin,
  authRegister,
  logOutUser,
  refreshUser,
} from './authOperation';

const initialState = {
  user: {
    email: '',
    password: '',
    userName: '',
    id: null,
    sid: null,
  },
  isLoggedIn: false,
  isSideBarOpen: false,
  isLoading: false,
  token: '',
  refreshToken: '',
  prevToken: '',
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
    builder.addCase(authRegister.pending, pendingHandlerAuth);
    builder.addCase(authRegister.rejected, rejectedHandler);
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user = {
        ...state.user,
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.username,
        id: action.payload.id,
      };
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(authLogin.pending, pendingHandlerAuth);
    builder.addCase(authLogin.rejected, rejectedHandler);
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        email: action.payload.user.email,
        password: action.payload.user.password,
        userName: action.payload.user.username,
        id: action.payload.user.id,
        sid: action.payload.sid,
      };
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.accessToken;
      state.isLoading = false;
      state.error = '';
      state.isLoggedIn = true;
    });
    builder.addCase(logOutUser.pending, pendingHandlerAuth);
    builder.addCase(logOutUser.rejected, rejectedHandler);
    builder.addCase(logOutUser.fulfilled, (state, action) => {
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
    });
    builder.addCase(refreshUser.pending, pendingHandlerAuth);
    builder.addCase(refreshUser.rejected, rejectedHandler);
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = { ...state.user, sid: action.payload.sid };
      state.token = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.isLoading = false;
      state.error = '';
      state.isLoggedIn = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
