//Import React
import React from 'react'
//Import the hook 'useLocalStorage'
import useLocalStorage from '../hooks/useLocalStorage';
//Import the functional component 'Login'
import Login from './Login'
//Import the functional component 'Dashboard'
import Dashboard from './Dashboard';
//Create the functional component 'App'
function App() {
  const [id, setId] = useLocalStorage('id')
  return (
      id ? <Dashboard id={id}/>:<Login onIdSubmit={setId}/>
  );
}
//Export the functional component 'App'
export default App;
