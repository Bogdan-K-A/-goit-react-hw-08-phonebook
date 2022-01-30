import React from 'react'
import AuthNav from './AuthNav'
import Navigation from './Navigation'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    borderBottom: '1px solid #2A363B',
  },
}

export default function AppBar() {
  return (
    <header style={styles.header}>
      <AuthNav />
      <Navigation />
    </header>
  )
}
