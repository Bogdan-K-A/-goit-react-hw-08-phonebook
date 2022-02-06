import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import Container from './components/container'
import AppBar from './components/Navigation/AppBar/AppBar'
import PrivatRouter from './components/PrivatRouter/PrivatRouter'
import PublicRoute from './components/PrivatRouter/PublicRoute'
import { useFetchUsersQuery } from './redux/auth/auth-redicer'
import { getIsLoggedIn, getToken } from './redux/auth/auth-selector'

const HomeView = lazy(() => import('./views/HomeView/HomeView'))
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'))
const LoginView = lazy(() => import('./views/LoginView/LoginView'))
const ContactsView = lazy(() => import('./views/ContactsView'))

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const token = useSelector(getToken)

  const { isLoading } = useFetchUsersQuery(token, {
    skip: token === null || isLoggedIn,
  })

  return (
    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<div>Загрузка...</div>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>

              <PrivatRouter path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivatRouter>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  )
}
