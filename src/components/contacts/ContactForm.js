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
             <input
                name="email"
                value={contact.email}
                onChange={onChange}
                placeholder="Email"
                required
            />
            <input
                name="phone"
                value={contact.phone}
                onChange={onChange}
                placeholder="Phone"
                required
            />
            <button type="submit">{buttonLabel}</button>
        </form>
    );
}

export default ContactForm;
