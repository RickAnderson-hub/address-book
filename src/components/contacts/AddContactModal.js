import React, { useState } from 'react';
import styles from './css/addContactModal.module.css';


function AddContactModal({ show, onClose, onSave }) {
    const [newContact, setNewContact] = useState({ name: '', email: '', phonenumber: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(newContact);
        onClose(); // Close modal after saving
    };

    if (!show) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
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
