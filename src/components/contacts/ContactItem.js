import React from 'react';

function ContactItem({ contact, onDelete, onEdit }) {
    return (
        <div>
            <p>{contact.name}</p>
            {/* Display other contact details */}
            <button onClick={() => onEdit(contact)}>Edit</button>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
}

export default ContactItem;
