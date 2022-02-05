import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { getIsLoggedIn } from '../../redux/auth/auth-selector'

export default function PrivatRouter({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn)

  if (isLoggedIn) {
    return children
  }

  return <Navigate to={redirectTo} />
}
