import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactList from './ContactList';

jest.mock('./Contact', () => (props) => (
    <div data-testid="mock-contact" {...props}></div>
));

describe('ContactList', () => {
    it('renders a list of contacts', () => {
        const mockContacts = [
            { id: 1, name: 'Alice Johnson' },
            { id: 2, name: 'Bob Smith' }
        ];

        const mockOnDelete = jest.fn();
        const mockOnEdit = jest.fn();

        render(<ContactList contacts={mockContacts} onDelete={mockOnDelete} onEdit={mockOnEdit} />);

        const contacts = screen.getAllByTestId('mock-contact');
        expect(contacts.length).toBe(mockContacts.length);
    });
});
