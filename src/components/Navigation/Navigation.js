import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import { getIsLoggedIn } from '../../redux/auth/auth-selector'

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <nav>
      <NavLink exact to="/" className={s.Link} activeClassName={s.ActiveLink}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.Link}
          activeClassName={s.ActiveLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  )
}

export default Navigation
