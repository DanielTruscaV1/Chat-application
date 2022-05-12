//Import React
import React from 'react'
//Import the hook 'useLocalStorage'
import useLocalStorage from '../hooks/useLocalStorage'
//Import the functional component 'Login'
import Login from './Login'
//Import the functional component 'Dashboard'
import Dashboard from './Dashboard';
//Import the functional component 'ContactsProvider'
import { ContactsProvider } from '../contexts/ContactsProvider'
//Import the functional component 'ConversationsProvider'
import {ConversationsProvider} from '../contexts/ConversationsProvider'
//Create the functional component 'App'
function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <ContactsProvider id={id}>
      <ConversationsProvider>
      <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )
  return (
      id ? dashboard :<Login onIdSubmit={setId}/>
  );
}
//Export the functional component 'App'
export default App;
