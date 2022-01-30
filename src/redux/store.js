import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { filterReducer } from '../redux/filter/filter-reducer'
import { contactApi } from './contacts/contactsSlice'

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
})

setupListeners(store.dispatch)
