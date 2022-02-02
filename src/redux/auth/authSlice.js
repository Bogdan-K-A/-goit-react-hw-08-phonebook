import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  /* -------------- tagTypes способствует Авто обновлению рендера ------------- */
  tagTypes: ['User'],
  endpoints: (build) => ({
    fetchUsers: build.query({
      query: () => '/users/current',
      providesTags: ['User'],
    }),

    /* ----------------------- передать в фаил регистрации ---------------------- */

    registerUser: build.mutation({
      query: ({ ...register }) => ({
        url: '/users/signup',
        method: 'POST',
        body: register,
      }),

      invalidatesTags: ['User'],
    }),

    /* ----------------------- передать в фаил логинизации ---------------------- */

    loginUser: build.mutation({
      query: ({ ...login }) => ({
        url: '/users/login',
        method: 'POST',
        body: login,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['User'],
    }),

    /* ----------------------- передать в фаил узер меню ---------------------- */

    logoutUser: build.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useFetchUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi
