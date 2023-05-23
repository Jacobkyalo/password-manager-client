import { apiSlice } from './apiSlice';
import { USER_URL } from '../config/endpoints';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: 'POST',
        body: data
      })
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: 'POST',
        body: data
      })
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: 'POST'
      })
    })
  })
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = usersApiSlice;
