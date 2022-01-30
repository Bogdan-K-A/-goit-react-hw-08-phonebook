import { ContactElem } from '../ContactElem/ContactElem'
import { getFilter } from '../../redux/filter/selector'
import { useSelector } from 'react-redux'
import s from '../ContactElem/ContactElem.module.css'

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter)

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    )
  }

  const visibleContacts = getVisibleContacts()
  return (
    <ul>
      {visibleContacts.map((contact) => (
        <li className={s.contactItem} key={contact.id}>
          <ContactElem {...contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
