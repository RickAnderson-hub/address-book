import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
    const mockContact = { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '1234567890' };
    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();

    it('displays the contact information', () => {
        render(<Contact contact={mockContact} onDelete={mockOnDelete} onEdit={mockOnEdit} />);

        expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
        expect(screen.getByText('Email: alice@example.com')).toBeInTheDocument();
        expect(screen.getByText('Phone: 1234567890')).toBeInTheDocument();
    });

    it('calls onEdit with contact on edit button click', () => {
        render(<Contact contact={mockContact} onDelete={mockOnDelete} onEdit={mockOnEdit} />);

        fireEvent.click(screen.getByText('Edit'));
        expect(mockOnEdit).toHaveBeenCalledWith(mockContact);
    });

    it('calls onDelete with contact id on delete button click', () => {
        render(<Contact contact={mockContact} onDelete={mockOnDelete} onEdit={mockOnEdit} />);

        fireEvent.click(screen.getByText('Delete'));
        expect(mockOnDelete).toHaveBeenCalledWith(mockContact.id);
    });
});
