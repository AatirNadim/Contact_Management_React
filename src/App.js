import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { AddContact } from './Components/Add_Contact';
import { ContactList } from './Components/Contact_List';
import { v4 as uuid } from 'uuid';

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

  React.useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div >
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} removeContactHandler = {removeContactHandler} />
    </div>  
  );
}

export default App;
