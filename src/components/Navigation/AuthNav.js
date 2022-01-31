import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

function AuthNav() {
  return (
    <nav>
      <NavLink
        // axact
        to="/"
        className={s.Link}
        // activeClassName={s.ActiveLink}
      >
        Главная
      </NavLink>
      <NavLink
        to="/contacts"
        className={s.Link}
        // activeClassName={s.activeLink}
      >
        Страница контактов
      </NavLink>
    </nav>
  )
}

export default AuthNav
