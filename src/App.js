import React, { useState } from 'react';
import MockContacts from './components/utils/MockContacts';
import ContactList from './components/contacts/ContactList';
import ContactForm from "./components/contacts/ContactForm";
import styles from './components/contacts/css/app.module.css';

function App() {

    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);

    const handleAddOrUpdate = (contact) => {
        if (contact.id) {
            setContacts(contacts.map(c => c.id === contact.id ? contact : c));
        } else {
            const newContact = {
                ...contact,
                id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
            };
            setContacts([...contacts, newContact]);

        }
    };

    const handleDelete = (contactId) => {
        // Filter out the contact with the specified id
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(updatedContacts);

        // If the current contact is the one being deleted, reset the current contact
        if (currentContact && currentContact.id === contactId) {
            setCurrentContact(null);
        }
    };

    const handleContactsLoaded = (mockContacts) => {
        setContacts(mockContacts);
    };

    return (
        <div id="diaryContainer" className="{styles.diaryContainer}">
            <header className={styles.header}>
                <h1>My Contacts</h1>
            </header>
            <main className={styles.main}>
                {contacts.length === 0 && <MockContacts onContactsLoaded={handleContactsLoaded} />}
                <ContactList
                    contacts={contacts}
                    onDelete={handleDelete}
                    onEdit={setCurrentContact}
                />
                <ContactForm
                    initialContact={currentContact}
                    handleSubmit={handleAddOrUpdate}
                    buttonLabel={currentContact ? "Update Contact" : "Add Contact"}
                />
            </main>
            <div className="{styles.icon-stack}">
                <button id="addContact" className="{styles.icon-button}">
                    <img src="add-contact.png" className="{styles.img}" alt="Add Contact" />
                </button>
                <button id="deleteContact" className="{styles.icon-button}">
                    <img src="delete-contact.png" className="{styles.img}" alt="Delete Contact" />
                </button>
            </div>
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
