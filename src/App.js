import './App.css';
import { Header } from './Components/Header';
import { AddContact } from './Components/Add_Contact';
import { ContactCard } from './Components/Contact_Card';

function App() {
  return (
    <div >
      <Header/>
      <AddContact/>
      <ContactCard/>
    </div>  
  );
}

export default App;
