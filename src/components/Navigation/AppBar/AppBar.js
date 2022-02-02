import React from 'react'
import AuthNav from '../Navigation'
import Navigation from '../AuthNav'
import s from './AppBar.module.css'
import UserMenu from '../../UserMenu/UserMenu'
// import { useLoginUserMutation } from '../../../redux/auth/authSlice'
// import { useFetchUsersQuery } from '../../../redux/auth/authSlice'

export default function AppBar() {
  // const { data, isFetching } = useFetchUsersQuery()
  // const [_, status] = useLoginUserMutation()
  // console.log(status)

  return (
    <header className={s.Header}>
      <AuthNav />
      <Navigation />
      <UserMenu />
      {/* {status ? <UserMenu /> : <Navigation />} */}
    </header>
  )
}
