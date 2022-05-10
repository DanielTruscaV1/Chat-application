//Import React
import React, {useRef} from "react";
//Import Bootstarap features
import {Modal, Form, Button} from 'react-bootstrap'
//Create and export the functional component 'NewContactsModal'
export default function NewContactsModal({closeModal}){
    const idRef =  useRef()
    const nameRef = useRef()
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <>
            <Modal.Header closeButton>
                Create contact
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" ref={idRef} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required/>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </>
    );
}