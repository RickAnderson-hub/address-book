import React from 'react';

function Contact({contact, onDelete, onEdit}) {
    return (
        <div>
            <li className="list-group-item">
                <h5>{contact.name}</h5>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
            </li>
            <button onClick={() => onEdit(contact)}>Edit</button>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
}

export default Contact;
