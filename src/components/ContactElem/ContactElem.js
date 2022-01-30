import { useDeleteContactMutation } from '../../redux/contacts/contactsSlice'
import s from './ContactElem.module.css'

export const ContactElem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation()
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={s.btnItem}
        type="button"
        onClick={() => {
          deleteContact(id)
        }}
      >
        Delete
      </button>
    </>
  )
}
