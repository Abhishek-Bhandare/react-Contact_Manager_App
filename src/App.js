// import './App.css';
import { useEffect, useState } from 'react';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import uuid4 from 'uuid4'

function App() {
  const locaStorageKey = "contact"
  const [contact, setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(locaStorageKey))
  || []})
  

  useEffect(()=>{
    localStorage.setItem(locaStorageKey, JSON.stringify(contact))
  },[contact])

  const addContact = (data) =>{
    setContact([...contact,{id:uuid4(),data} ])
  }

  const removeContact = (id) =>{
    const updatedList = contact.filter((val)=>{
      return val.id !== id;
    })
    setContact(updatedList)
  }

  return (
    <div className='App'>
     <Header/>
     <AddContact addContact={addContact}/>
     <ContactList contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
