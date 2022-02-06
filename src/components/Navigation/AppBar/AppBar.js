import React from 'react'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav'
import s from './AppBar.module.css'
import UserMenu from '../../UserMenu/UserMenu'
import { getIsLoggedIn } from '../../../redux/auth/auth-selector'
import { useSelector } from 'react-redux'

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      <header className={s.Header}>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  )
}
