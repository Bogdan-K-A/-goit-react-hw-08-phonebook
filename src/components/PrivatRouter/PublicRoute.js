import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { getIsLoggedIn } from '../../redux/auth/auth-selector'
import { Route } from 'react-router-dom'

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const shouldRedirect = isLoggedIn && restricted

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  )
}
