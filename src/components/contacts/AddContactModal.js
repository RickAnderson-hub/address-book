import React, { useState } from 'react';
import styles from './css/addContactModal.module.css';


function AddContactModal({ show, onClose, onSave }) {
    const [newContact, setNewContact] = useState({ name: '', email: '', phonenumber: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const baseUrl = "http://localhost:8080/contacts";

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage(''); // Reset error message on new submission

        fetch(baseUrl + '/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text().then(text => { throw new Error(text) });
            }
        })
        .then(data => {
            onSave(data); // Pass the created contact back
            onClose();   // Close modal after successful save
        })
        .catch(error => {
            console.error('Error creating contact:', error);
            setErrorMessage(error.message || 'Error occurred while creating contact');
        });
    };

    if (!show) {
        return null;
    }


    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Name'
                        value={newContact.name}
                        required
                        onChange={e => setNewContact({ ...newContact, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder='Surname'
                        value={newContact.surname}
                        required
                        onChange={e => setNewContact({ ...newContact, surname: e.target.value })}
                    />
                    <input
                    placeholder='Email'
                        type="email"
                        value={newContact.email}
                        onChange={e => setNewContact({ ...newContact, email: e.target.value })}
                    />
                    <input
                    placeholder='Phone number'
                        type="text"
                        value={newContact.phonenumber}
                        onChange={e => setNewContact({ ...newContact, phonenumber: e.target.value })}
                    />
                    <button type="submit">Add Contact</button>
                </form>
            </div>
        </div>
    );
}

export default AddContactModal;
