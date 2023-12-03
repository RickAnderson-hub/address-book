import React, { useEffect } from 'react';

function MockContacts({ onContactsLoaded }) {
    useEffect(() => {
        setTimeout(() => {
            const mockData = [
                { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890' },
                { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901' },
                { id: 3, name: 'Carol Williams', email: 'carol@example.com', phone: '345-678-9012' }
            ];
            onContactsLoaded(mockData); // Pass the mock data to the parent component
        }, 1000);
    }, [onContactsLoaded]);

    return null; // This component doesn't need to render anything itself
}

export default MockContacts;
