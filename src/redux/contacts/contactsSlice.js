import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61ec322ef3011500174d20fc.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: (build) => ({
    fetchContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: build.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: build.mutation({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi
