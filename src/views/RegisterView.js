import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
}

export default function RegisterView() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handelSubmit} autoComplete="off" style={styles.form}>
        <label style={styles.label}>
          Имя
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label style={styles.label}>
          Почта
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label style={styles.label}>
          Пароль
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button type="submit">Регистрация</button>
      </form>
    </div>
  )
}