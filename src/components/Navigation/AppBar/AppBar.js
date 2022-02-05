import React from 'react'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav'
import s from './AppBar.module.css'
import UserMenu from '../../UserMenu/UserMenu'
import { getIsLoggedIn, getToken } from '../../../redux/auth/auth-selector'
import { useSelector } from 'react-redux'
import { useFetchUsersQuery } from '../../../redux/auth/auth-redicer'

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const token = useSelector(getToken)
  const { isLoading } = useFetchUsersQuery(token, {
    skip: token === null || isLoggedIn,
  })

  return (
    <>
      {!isLoading && (
        <header className={s.Header}>
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      )}
    </>
  )
}
