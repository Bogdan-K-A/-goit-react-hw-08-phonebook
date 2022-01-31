import React, { useState } from 'react'
import s from '../RegisterView/RegisterView.module.css'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handelSubmit} className={s.Form} autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
