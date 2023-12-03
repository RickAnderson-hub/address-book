import React, { useState, useEffect } from 'react';
import styles from './css/contactForm.module.css';


function ContactForm({ initialContact, handleSubmit, buttonLabel='Submit'}) {
    const [contact, setContact] = useState(initialContact || { name: '', email: '', phone: '' });

    useEffect(() => {
        if (initialContact) {
            setContact(initialContact);
        }
    }, [initialContact]);

    const onChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(contact);
    };

    return (
        <form onSubmit={onSubmit} className={styles.ContactForm}>
            <div className={styles.div}>
                <input
                    name="name"
                    value={contact.name}
                    onChange={onChange}
                    placeholder="Name"
                    className={styles.input}
                    required
                />
                <input
                    name="email"
                    value={contact.email}
                    onChange={onChange}
                    placeholder="Email"
                    className={styles.input}
                />
                <input
                    name="phone"
                    value={contact.phone}
                    onChange={onChange}
                    placeholder="Phone"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>{buttonLabel}</button>
            </div>
        </form>
    );
}

export default ContactForm;
