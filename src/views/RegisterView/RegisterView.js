import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import {
  useRegisterUserMutation,
  // useFetchUsersQuery,
} from '../../redux/auth/authSlice'
import s from './RegisterView.module.css'

export default function RegisterView() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registerUser] = useRegisterUserMutation()

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)

      case 'email':
        return setEmail(value)

      case 'password':
        return setPassword(value)

      default:
        return
    }
  }

  const handelSubmit = (e) => {
    e.preventDefault()

    registerUser({ name, email, password })
    // console.log('Регистрация:', { name, email, password })
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handelSubmit} autoComplete="off" className={s.Form}>
        <label className={s.Label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={s.Label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.Label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Регистрация</button>
      </form>
    </div>
  )
}
