import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { filterReducer } from '../redux/filter/filter-reducer'
import { contactApi } from './contacts/contactsSlice'
import { authApi } from './auth/auth-redicer'
import authReducer from './auth/auth-slice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
    authApi.middleware,
  ],
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)
