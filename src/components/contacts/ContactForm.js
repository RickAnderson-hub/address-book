import React, { useState, useEffect } from 'react';

function ContactForm({ initialContact, handleSubmit, buttonLabel }) {
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
        <form onSubmit={onSubmit}>
            <input
                name="name"
                value={contact.name}
                onChange={onChange}
                placeholder="Name"
                required
            />
            {/* Inputs for email and phone, similar to the name input */}
            <button type="submit">{buttonLabel}</button>
        </form>
    );
}

export default ContactForm;
