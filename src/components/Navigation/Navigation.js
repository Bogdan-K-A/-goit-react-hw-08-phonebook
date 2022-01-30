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

function Navigation() {
  return (
    <nav>
      <Link
        to="/contacts"
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Страница контактов
      </Link>
      <Link
        to="/login"
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Вход
      </Link>
    </nav>
  )
}

export default Navigation
