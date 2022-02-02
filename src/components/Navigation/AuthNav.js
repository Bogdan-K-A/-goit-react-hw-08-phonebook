import React from 'react'
import { Link } from 'react-router-dom'
import s from './Navigation.module.css'

function Navigation() {
  return (
    <div>
      <Link
        to="/register"
        className={s.Link}
        // activeClassName={s.ActiveLink}
      >
        Регистрация
      </Link>
      <Link
        to="/login"
        className={s.Link}
        // activeStyle={styles.activeLink}
      >
        Войти
      </Link>
    </div>
  )
}

export default Navigation
