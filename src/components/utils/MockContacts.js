import React, { useEffect } from 'react';

function MockContacts({ onContactsLoaded }) {
    useEffect(() => {
        setTimeout(() => {
            const mockData = [
                { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890' },
                { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901' },
                { id: 3, name: 'Carol Williams', email: 'carol@example.com', phone: '345-678-9012' },
                { id: 4, name: 'Richard Filmore', email: 'richard@example.com', phone: '103-543-7890' },
                { id: 5, name: 'Meg Zyler', email: 'meg@example.com', phone: '675-567-82342' },
                { id: 6, name: 'Froyo Hoffer', email: 'froyo@example.com', phone: '676-465-4322' },
                { id: 7, name: 'Inge Meyer', email: 'inga@example.com', phone: '342-343-4343' }
            ];
            onContactsLoaded(mockData); // Pass the mock data to the parent component
        }, 1000);
    }, [onContactsLoaded]);

    return null; // This component doesn't need to render anything itself
}

export default MockContacts;
