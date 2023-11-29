import React, {useEffect, useState} from 'react';
import MockContacts from './components/utils/MockContacts';
import ContactList from './components/contacts/ContactList';
import ContactForm from "./components/contacts/ContactForm";

function App() {

    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);

    useEffect(() => {
        // Fetch contacts from API and setContacts
    }, []);

    const handleAddOrUpdate = (contact) => {
        if (contact.id) {
            // Update contact in API and state
        } else {
            // Add contact to API and state
        }
    };

    const handleDelete = (contactId) => {
        // Delete contact from API and state
    };

    const handleContactsLoaded = (mockContacts) => {
        setContacts(mockContacts);
    };

    return (
        <div>
            <h1>My Address Book</h1>
            {/*<MockContacts onContactsLoaded={handleContactsLoaded} />*/}
            {/*<ContactList contacts={contacts} />*/}
            <ContactForm
                initialContact={currentContact}
                handleSubmit={handleAddOrUpdate}
                buttonLabel={currentContact ? "Update Contact" : "Add Contact"}
            />
            <ContactList
                contacts={contacts}
                onDelete={handleDelete}
                onEdit={setCurrentContact}
            />
        </div>
    );
}
export default App;

//TODO:
/*
    State Management: For larger applications, consider using Redux or Context API for state management.
    Routing: If your application grows, you might want to add routing with React Router.
    Styling: Utilize CSS modules or styled-components for better styling management.
    Error Handling: Implement robust error handling, especially for API responses.
    Loading States: Manage and display loading states for a better user experience.
    Environment Variables: Store API URLs and sensitive data in environment variables.
    Testing: Write tests for your components and utility functions.
 */
