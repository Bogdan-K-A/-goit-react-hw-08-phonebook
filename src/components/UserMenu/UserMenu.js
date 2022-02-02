import React from 'react'
import s from './UserMenu.module.css'
import avatar from './images/ava.png'
import { useLogoutUserMutation } from '../../redux/auth/authSlice'
import { useSelector } from 'react-redux'
import { getName } from '../../redux/auth/auth-selector'

function UserMenu() {
  const name = useSelector(getName)
  const [logoutUser] = useLogoutUserMutation()
  console.log(name)

  const logouClick = () => {
    logoutUser('')
  }

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
        {/* {name} */}
      </span>
      <button
        type="button"
        onClick={() => {
          logouClick()
        }}
      >
        Выйти
      </button>
    </div>
  )
}

export default UserMenu
