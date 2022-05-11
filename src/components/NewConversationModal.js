//Import React
import React, {useState} from "react";
//Import bootstrap features
import {Modal, Form, Button, FormGroup} from 'react-bootstrap'
import {useContacts} from '../contexts/ContactsProvider'
import {useConversations} from '../contexts/ConversationsProvider'
//Create and export the functional component 'NewContactsModal'
export default function NewConversationsModal({closeModal}){
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const {contacts} = useContacts()
    const {createConversation} = useConversations()
    function handleSubmit(e){
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }
    function handleCheckboxChange(contactId){
        setSelectedContactIds(prevSelectedContactIds => {
            if(prevSelectedContactIds.includes(contactId)){
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            }
            else{
                return [...prevSelectedContactIds, contactId]
            }
        })
    }
    return (
        <>
            <Modal.Header closeButton>
                Create conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <FormGroup controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </FormGroup>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
}