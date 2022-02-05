import React from 'react'
import s from './UserMenu.module.css'
import avatar from './images/ava.png'
import { useLogoutUserMutation } from '../../redux/auth/auth-redicer'
import { useSelector } from 'react-redux'
import { getUserName } from '../../redux/auth/auth-selector'

function UserMenu() {
  const name = useSelector(getUserName)
  const [logoutUser] = useLogoutUserMutation()

  return (
    <div className={s.Container}>
      <img
        src={avatar}
        alt=""
        width="32
      "
        className={s.Avatar}
      />
      <span className={s.Name}>
        Добро пожаловать!
        <span> {name}</span>
      </span>
      <button
        type="button"
        onClick={() => {
          logoutUser()
        }}
      >
        Выйти
      </button>
    </div>
  )
}

export default UserMenu
