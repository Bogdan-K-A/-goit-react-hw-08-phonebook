import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { getIsLoggedIn } from '../../redux/auth/auth-selector'
import { Route } from 'react-router-dom'

export default function PrivatRouter({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}
