import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={s.Link} activeClassName={s.ActiveLink}>
        Регистрация
      </NavLink>
      <NavLink to="/login" className={s.Link} activeClassName={s.ActiveLink}>
        Логин
      </NavLink>
    </div>
  )
}

export default AuthNav
