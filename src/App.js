import Container from './components/container'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactFilter from './components/ContactFilter'
import Spinner from './components/Spinner'
import { useFetchContactsQuery } from './redux/contacts/contactsSlice'

export default function App() {
  const { data, isFetching } = useFetchContactsQuery()

  return (
    <Container>
      <h1>Phoneboock</h1>
      <ContactForm contacts={data} />

      <h2>Contacts</h2>
      {data && data.length >= 2 && <ContactFilter />}

      {data && <ContactList contacts={data} />}
      {isFetching && <Spinner />}
    </Container>
  )
}
