import React from 'react';
import Contact from './Contact';

function ContactList({ contacts, onDelete, onEdit }) {
    return (
        <ul className="list-group">
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </ul>
    );
}

export default ContactList;
