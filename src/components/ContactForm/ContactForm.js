import { useState } from 'react'
import { useAddContactMutation } from '../../redux/contacts/contactsSlice'
import s from './ContactForm.module.css'

export default function ContactForm({ contacts }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [addContact] = useAddContactMutation()

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break

      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const reLockInput = contacts.find((contact) => contact.name === name)

    if (reLockInput) {
      alert('Такой контакт уже есть в списке')

      return contacts
    } else {
      addContact({ name, number })
      setName('')
      setNumber('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          className={s.roundedInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name:"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          className={s.roundedInput}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Tel:"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.btnForm}>
        Add contact
      </button>
    </form>
  )
}
