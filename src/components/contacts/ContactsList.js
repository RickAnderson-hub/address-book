import React from 'react';
import Contact from './Contact';

function ContactsList({ contacts }) {
    return (
        <ul className="list-group">
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}

export default ContactsList;
