import React, { useState } from 'react';
import MockContacts from './components/utils/MockContacts';
import ContactList from './components/contacts/ContactsList'; // Assuming you have this component

function App() {
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
