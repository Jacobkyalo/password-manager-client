import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/auth/authSlice';
import { authApiSlice } from '../features/auth/authApiSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiSlice.middleware),
  devTools: true
});

export default store;
