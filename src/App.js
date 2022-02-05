import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Container from './components/container'
import AppBar from './components/Navigation/AppBar/AppBar'
import PrivatRouter from './components/PrivatRouter/PrivatRouter'
import PublicRoute from './components/PrivatRouter/PublicRoute'
import { getIsLoggedIn } from './redux/auth/auth-selector'

const HomeView = lazy(() => import('./views/HomeView/HomeView'))
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'))
const LoginView = lazy(() => import('./views/LoginView/LoginView'))
const ContactsView = lazy(() => import('./views/ContactsView'))

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRouter redirectTo="/">
                <ContactsView />
              </PrivatRouter>
            }
          />
          <Route
            path="*"
            element={isLoggedIn ? <ContactsView /> : <HomeView />}
          />
        </Routes>
      </Suspense>
    </Container>
  )
}
