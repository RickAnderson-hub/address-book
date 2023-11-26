import React from 'react';

function Contact({ contact }) {
    return (
        <li className="list-group-item">
            <h5>{contact.name}</h5>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
        </li>
    );
}

export default Contact;
