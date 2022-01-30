import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
}

function AuthNav() {
  return (
    <div>
      <Link
        to="/"
        style={styles.link}
        //   activeStyle={styles.activeLink}
      >
        Главная
      </Link>
      <Link
        to="/register"
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Регистрация
      </Link>
    </div>
  )
}

export default AuthNav
