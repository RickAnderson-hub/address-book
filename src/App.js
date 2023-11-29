import React, { useState } from 'react';
import MockContacts from './components/utils/MockContacts';
import ContactList from './components/contacts/ContactList';

function App() {
    //ContactsList takes an array of contacts and maps them to individual Contact components.
    const [contacts, setContacts] = useState([]);

    const handleContactsLoaded = (mockContacts) => {
        setContacts(mockContacts);
    };

    return (
        <div>
            <h1>My Address Book</h1>
            <MockContacts onContactsLoaded={handleContactsLoaded} />
            <ContactList contacts={contacts} />
            {/* Rest of your components */}
        </div>
    );
}

export default App;
