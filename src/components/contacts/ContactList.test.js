import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactList from './ContactList';
import Contact from './Contact';

// Mock the Contact component
jest.mock('./Contact', () => (props) => (
    <div data-testid="contact" onClick={() => props.onEdit(props.contact)}>
        Mocked Contact {props.contact.name}
    </div>
));

describe('ContactList Component', () => {
    const mockContacts = [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '987-654-3210' }
    ];
    const mockDelete = jest.fn();
    const mockEdit = jest.fn();

    it('renders a list of contacts', () => {
        render(<ContactList contacts={mockContacts} onDelete={mockDelete} onEdit={mockEdit} />);
        const contacts = screen.getAllByTestId('contact');
        expect(contacts.length).toBe(mockContacts.length);
    });

    it('passes correct data to each Contact component', () => {
        render(<ContactList contacts={mockContacts} onDelete={mockDelete} onEdit={mockEdit} />);
        const firstContact = screen.getByText('Mocked Contact Alice Johnson');
        expect(firstContact).toBeInTheDocument();
    });

    it('passes onDelete and onEdit functions to each Contact component', () => {
        render(<ContactList contacts={mockContacts} onDelete={mockDelete} onEdit={mockEdit} />);

        // Simulate clicking on the first contact to trigger the mockEdit function
        const firstContact = screen.getByText('Mocked Contact Alice Johnson');
        firstContact.click();

        expect(mockEdit).toHaveBeenCalledWith(mockContacts[0]);
    });
});
