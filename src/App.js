import React, { useState, useEffect } from 'react';
import ContactList from './components/contacts/ContactList';
import AddContactModal from './components/contacts/AddContactModal';
import styles from './App.css';

function App() {


    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const contactsPerPage = 3;
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteError, setDeleteError] = useState(null);
    const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/contacts";

    // Filter contacts based on search term
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);
    const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

    // Fetch contacts when the component mounts
    useEffect(() => {
        fetch(baseUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setContacts(data.content);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleSaveContact = (contact) => {
        handleAddOrUpdate(contact);
        setShowModal(false);
    };

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
        setDeleteError(null);
        fetch(`${baseUrl}/delete/${contactId}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    // Filter out the contact with the specified id
                    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
                    setContacts(updatedContacts);
                    // If the current contact is the one being deleted, reset the current contact
                    if (currentContact && currentContact.id === contactId) {
                        setCurrentContact(null);
                    }
                } else {
                    // Handle the error response here
                    setDeleteError('Failed to delete contact. Please try again.');
                    console.error('Error deleting contact:', response.statusText);
                }
            })
            .catch(error => {
                // Handle any network error here
                setDeleteError('Network error. Please check your connection.');
                console.error('Network error:', error);
            });
    };
    

    const handleEdit = (updatedContact) => {
        // Construct the URL for the PUT request
        const url = `${baseUrl}/update/${updatedContact.id}`;
    
        // Make the PUT request to update the contact
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedContact),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the contacts in the state with the updated contact
            setContacts(contacts.map(contact =>
                contact.id === data.id ? data : contact
            ));
        })
        .catch(error => {
            console.error('Error updating contact:', error);
            // Handle errors here, such as displaying a message to the user
        });
    };
    

    return (
        <div id="addressBookContainer" className={styles.addressBookContainer}>
            <header className={styles.header}>
                <h1>My Contacts</h1>
                <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
            </header>
            <main>
                {isLoading ? (<div>Loading...</div>) : error ? (<div>Error: {error.message}</div>) : (
                    <div>
                        {deleteError && <div style={{ color: 'red' }}>{deleteError}</div>}
                        <ContactList
                            contacts={currentContacts}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    </div>
                )}
            </main>
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        disabled={currentPage === page}
                        className={styles.pageButton}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div className={styles.iconStack}>
                <button className={styles.iconButton} onClick={handleAddClick}>
                    <img src="add-contact.png" className={styles.img} alt="Add Contact" />
                </button>
                <AddContactModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onSave={handleSaveContact}
                />
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
