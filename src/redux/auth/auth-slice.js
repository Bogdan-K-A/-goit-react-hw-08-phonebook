import { createSlice } from '@reduxjs/toolkit'
import { authApi } from './auth-redicer'

/* -------------------- Изначальное состояние "стартовый" -------------------- */
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  // опции/параметры
  name: 'auth', //название редьюсера из которого передаётся стеит в селектор
  initialState, //изначальное состояние
  //редьюсер = это обьект функций который меняет состояни
  extraReducers: (bilder) => {
    bilder.addMatcher(
      authApi.endpoints.fetchUsers.matchFulfilled,
      (state, { payload }) => {
        state.user = payload
        state.isLoggedIn = true
      },
    )

    bilder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      },
    )

    bilder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      },
    )

    bilder.addMatcher(
      authApi.endpoints.logoutUser.matchFulfilled,
      (state, _) => {
        state.user = initialState.user
        state.token = initialState.token
        state.isLoggedIn = false
      },
    )
  },
})

export default authSlice.reducer //передаём в store
