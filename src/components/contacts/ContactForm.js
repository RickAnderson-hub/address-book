import React, { useState, useEffect } from 'react';

function ContactForm({ initialContact, handleSubmit, buttonLabel = 'Submit' }) {
    const [contact, setContact] = useState(initialContact || { name: '', email: '', phonenumber: '' });

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
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    value={contact.name}
                    onChange={onChange}
                    placeholder="Name"
                    required
                />
                <label htmlFor="surname">Surname:</label>
                <input
                    name="surname"
                    value={contact.surname}
                    onChange={onChange}
                    placeholder="Surname"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    value={contact.email}
                    onChange={onChange}
                    placeholder="Email"
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    name="phonenumber"
                    value={contact.phonenumber}
                    onChange={onChange}
                    placeholder="Phone"
                />

                <button type="submit">{buttonLabel}</button>
            </div>
        </form>
    );
}

export default ContactForm;
