import React, { useState } from 'react';
import styles from './css/contactForm.module.css'

function Contact({ contact, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableContact, setEditableContact] = useState({ ...contact });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(editableContact);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditableContact({ ...editableContact, [e.target.name]: e.target.value });
    };

    if (isEditing) {
        return (
            <div className={styles.contactForm}>
                <input type="text" name="name" value={editableContact.name} onChange={handleChange} />
                <input type="email" name="email" value={editableContact.email} onChange={handleChange} />
                <input type="text" name="phone" value={editableContact.phone} onChange={handleChange} />
                <div className={styles.contactForm}>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.contactForm}>
            <li className="list-group-item">
                <h5>{contact.name}</h5>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
            </li>
            <div className={styles.contactForm}>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Contact;
