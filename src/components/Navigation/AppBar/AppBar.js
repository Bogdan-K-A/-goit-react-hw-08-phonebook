import React from 'react'
import AuthNav from '../AuthNav'
import Navigation from '../../Navigation/Navigation'
import s from './AppBar.module.css'
import UserMenu from '../../UserMenu/UserMenu'

export default function AppBar() {
  return (
    <header className={s.Header}>
      <AuthNav />
      <Navigation />
      <UserMenu />
    </header>
  )
}
