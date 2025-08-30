import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import styles from './css/addContactModal.module.css';


const AddContactModal = React.memo(({ show, onClose, onSave }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/contacts";

    const handleSubmit = (contact) => {
        setErrorMessage(''); // Reset error message on new submission

        fetch(baseUrl + '/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
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
                <ContactForm handleSubmit={handleSubmit} buttonLabel="Add Contact" />
            </div>
        </div>
    );
});

AddContactModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default AddContactModal;
