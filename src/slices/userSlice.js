/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser: (state, action) => {
      state.user = null;
      localStorage.removeItem('user');
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
