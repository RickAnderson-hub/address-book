import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Contact from './Contact';



describe('Contact Component', () => {
    // Mock Contact data
    const mockContact = {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        phone: '123-456-7890'
    };

    it('renders contact information', () => {
        render(<Contact contact={mockContact} onDelete={() => { }} onEdit={() => { }} />);
        expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
        expect(screen.getByText('Email: alice@example.com')).toBeInTheDocument();
        expect(screen.getByText('Phone: 123-456-7890')).toBeInTheDocument();
    });

    it('enters edit mode', () => {
        render(<Contact contact={mockContact} onDelete={() => { }} onEdit={() => { }} />);
        fireEvent.click(screen.getByText('Edit'));
        expect(screen.getByDisplayValue('Alice Johnson')).toBeInTheDocument();
        expect(screen.getByDisplayValue('alice@example.com')).toBeInTheDocument();
    });

    it('validates input fields', () => {
        render(<Contact contact={mockContact} onDelete={() => { }} onEdit={() => { }} />);
        fireEvent.click(screen.getByText('Edit'));
        fireEvent.change(screen.getByDisplayValue('Alice Johnson'), { target: { value: '' } });
        fireEvent.click(screen.getByText('Save'));
        expect(screen.getByText('Name is required.')).toBeInTheDocument();
    });

    it('calls onDelete when delete button is clicked', () => {
        const mockDelete = jest.fn();
        render(<Contact contact={mockContact} onDelete={mockDelete} onEdit={() => { }} />);

        fireEvent.click(screen.getByTestId('delete-contact'));
        expect(mockDelete).toHaveBeenCalledWith(mockContact.id);
    });

    it('shows an error message for invalid email', () => {
        render(<Contact contact={mockContact} onDelete={() => { }} onEdit={() => { }} />);
        fireEvent.click(screen.getByTestId('edit-contact'));

        // Simulate entering an invalid email
        fireEvent.change(screen.getByTestId('Email'), { target: { value: 'invalidemail' } });
        fireEvent.click(screen.getByText('Save'));

        expect(screen.getByText('Valid email is required.')).toBeInTheDocument();
    });

    it('does not show an error message for valid edits', () => {
        const mockEdit = jest.fn();
        render(<Contact contact={mockContact} onDelete={() => { }} onEdit={mockEdit} />);
        fireEvent.click(screen.getByTestId('edit-contact'));

        // Simulate editing a contact with valid data
        fireEvent.change(screen.getByTestId('Email'), { target: { value: 'newemail@example.com' } });
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'New Name' } });
        fireEvent.click(screen.getByText('Save'));

        expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
        expect(screen.queryByText('Valid email is required.')).not.toBeInTheDocument();
        expect(mockEdit).toHaveBeenCalledWith({ ...mockContact, email: 'newemail@example.com', name: 'New Name' });
    });

});