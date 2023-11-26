import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsList from './components/contacts/ContactsList';

function App() {
    const [contacts, setContacts] = useState([
        {id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890'},
        // ... more contacts
    ]);

    return (
        <div className="container">
            <h1>My Address Book</h1>
            <ContactsList contacts={contacts}/>
        </div>
    );
}

export default App;
