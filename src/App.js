import { Routes, Route } from 'react-router-dom'
import ContactsView from './views/ContactsView'
import Container from './components/container'
import HomeView from './views/HomeView'
import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'
import AppBar from './components/Navigation/AppBar'

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </Container>
  )
}

/* ----------------------------- код из дмашки 7 ---------------------------- */
// import Container from './components/container'
// import ContactForm from './components/ContactForm'
// import ContactList from './components/ContactList'
// import ContactFilter from './components/ContactFilter'
// import Spinner from './components/Spinner'
// import { useFetchContactsQuery } from './redux/contacts/contactsSlice'

// export default function App() {
//   const { data, isFetching } = useFetchContactsQuery()

//   return (
//     <Container>

//       <h1>Phoneboock</h1>
//       <ContactForm contacts={data} />

//       <h2>Contacts</h2>
//       {data && data.length >= 2 && <ContactFilter />}

//       {data && <ContactList contacts={data} />}
//       {isFetching && <Spinner />}
//     </Container>
//   )
// }
