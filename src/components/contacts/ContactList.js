import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = React.memo(({ contacts, onDelete, onEdit }) => {
    return (
        <ul className="list-group">
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </ul>
    );
});

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string,
            email: PropTypes.string,
            phonenumber: PropTypes.string,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ContactList;
