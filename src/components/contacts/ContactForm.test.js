import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
    it('renders correctly with initial values', () => {
        const initialContact = { name: 'Alice', email: 'alice@example.com', phonenumber: '1234567890' };
        render(<ContactForm initialContact={initialContact} buttonLabel="Save" />);

        expect(screen.getByPlaceholderText('Name').value).toBe('Alice');
        expect(screen.getByPlaceholderText('Email').value).toBe('alice@example.com');
        expect(screen.getByPlaceholderText('Phone').value).toBe('1234567890');
    });

    it('calls handleSubmit with updated values on form submission', () => {
        const mockHandleSubmit = jest.fn();
        const initialContact = { name: '', email: '', phonenumber: '' };
        
        render(<ContactForm initialContact={initialContact} handleSubmit={mockHandleSubmit} buttonLabel="Add" />);

        fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Bob' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'email@not.com' } });
        fireEvent.change(screen.getByPlaceholderText('Phone'), { target: { value: '123456' } });

        fireEvent.click(screen.getByText('Add'));

        expect(mockHandleSubmit).toHaveBeenCalledWith({ name: 'Bob', email: 'email@not.com', phonenumber: '123456' });
    });
});
