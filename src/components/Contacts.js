//Import React
import React from 'react'
//Import bootstrap features
import { ListGroup } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';
//Create and export the functional component 'Contacts'
export default function Contacts(){
    const {contacts} = useContacts()
    return (
        <ListGroup variant="flush">
            {contacts.map(contact => (
                <ListGroup.Item key={contact.id}>
                    {contact.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}