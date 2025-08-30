import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactForm = React.memo(({ initialContact, handleSubmit, buttonLabel = 'Submit' }) => {
    const [contact, setContact] = useState(initialContact || { name: '', surname: '', email: '', phonenumber: '' });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialContact) {
            setContact(initialContact);
        }
    }, [initialContact]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{10}$/; // Simple 10 digit phone
        return re.test(phone);
    };

    const onChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!contact.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!contact.surname.trim()) {
            newErrors.surname = "Surname is required.";
        }
        if (!contact.email.trim() || !validateEmail(contact.email)) {
            newErrors.email = "Valid email is required.";
        }
        if (contact.phonenumber && !validatePhone(contact.phonenumber)) {
            newErrors.phonenumber = "Phone number must be 10 digits.";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
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
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                <label htmlFor="surname">Surname:</label>
                <input
                    name="surname"
                    value={contact.surname}
                    onChange={onChange}
                    placeholder="Surname"
                    required
                />
                {errors.surname && <span style={{ color: 'red' }}>{errors.surname}</span>}

                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    value={contact.email}
                    onChange={onChange}
                    placeholder="Email"
                    required
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

                <label htmlFor="phone">Phone:</label>
                <input
                    name="phonenumber"
                    value={contact.phonenumber}
                    onChange={onChange}
                    placeholder="Phone (10 digits)"
                />
                {errors.phonenumber && <span style={{ color: 'red' }}>{errors.phonenumber}</span>}

                <button type="submit">{buttonLabel}</button>
            </div>
        </form>
    );
});

ContactForm.propTypes = {
    initialContact: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        email: PropTypes.string,
        phonenumber: PropTypes.string,
    }),
    handleSubmit: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string,
};

export default ContactForm;
