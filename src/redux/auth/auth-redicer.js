import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',

    // заголовок по умолчанию, работает на все запросы
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),

  tagTypes: ['User'], //tagTypes способствует Авто обновлению рендера

  endpoints: (build) => ({
    fetchUsers: build.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: '/users/current',
        })
        return res
      },
      invalidatesTags: ['User'],
    }),

    /* ----------------------- передаём в фаил регистрации ---------------------- */
    registerUser: build.mutation({
      queryFn: async (register, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: '/users/signup',
          method: 'POST',
          body: register,
        })

        return res
      },

      invalidatesTags: ['User'],
    }),

    /* ----------------------- передаём в фаил логинизации ---------------------- */
    loginUser: build.mutation({
      queryFn: async ({ ...login }, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: '/users/login',
          method: 'POST',
          body: login,
        })
        return res
      },

      invalidatesTags: ['User'],
    }),

    /* ----------------------- передать в фаил юзер меню ---------------------- */
    logoutUser: build.mutation({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: '/users/logout',
          method: 'POST',
        })
        return res
      },
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
