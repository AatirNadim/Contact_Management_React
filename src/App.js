import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { AddContact } from './Components/Add_Contact';
import { ContactCard } from './Components/Contact_Card';
import { uuid } from 'uuidv4';

function App() {
  const local_storage_key = "contacts";
  const [contacts, setContacts] = React.useState(
    JSON.parse(localStorage.getItem(local_storage_key)) || []
  );

  const addContactHandler = (cont_obj) => {
    console.log('in the add contact function', cont_obj);
    setContacts([...contacts, {
      id : uuid(),
      ...cont_obj
    }])
  }

  const removeContactHandler = (id) => {
    console.log('in the remove contact function');
    const newList = contacts.filter((contact) => {
      return contact.id !== id;
    }) 
    setContacts(newList);
  }

  return (
    <div >
      <Header/>
      <AddContact/>
      <ContactCard/>
    </div>  
  );
}

export default App;
