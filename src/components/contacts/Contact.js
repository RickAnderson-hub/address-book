import React, { useState } from 'react';
import styles from './css/contactForm.module.css'

function Contact({ contact, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableContact, setEditableContact] = useState({ ...contact });
    const [errors, setErrors] = useState({});

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        let newErrors = {};
        if (!editableContact.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!editableContact.email.trim() || !validateEmail(editableContact.email)) {
            newErrors.email = "Valid email is required.";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onEdit(editableContact);
        setIsEditing(false);
        setErrors({}); // Clear errors after successful save
    };

    const handleChange = (e) => {
        setEditableContact({ ...editableContact, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return re.test(String(email).toLowerCase());
    };

    if (isEditing) {
        return (
            <div className={styles.contactForm}>
                <input type="text"
                    data-testid='Name'
                    name="name"
                    value={editableContact.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

                <input type="email"
                    data-testid='Email'
                    name="email"
                    value={editableContact.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

                <input type="text"
                    name="phone"
                    value={editableContact.phone}
                    onChange={handleChange}
                />

                <div className={styles.contactFormButtons}>
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
                <button data-testid="edit-contact" onClick={handleEditClick}>Edit</button>
                <button data-testid="delete-contact" onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Contact;
