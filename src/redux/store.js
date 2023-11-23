import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { userDataReducer } from './userData/userDataSlice';
import { productReducer } from './products/productSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'refreshToken'],
};

const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    userData: userDataReducer,
    products: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
