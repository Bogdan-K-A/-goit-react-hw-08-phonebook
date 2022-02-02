import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { filterReducer } from '../redux/filter/filter-reducer'
import { contactApi } from './contacts/contactsSlice'
import { authApi } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
    authApi.middleware,
  ],
})

setupListeners(store.dispatch)
