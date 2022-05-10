//Import React
import React, {useRef} from 'react'
//Import a container, a form and a button template
import {Container, Form, Button} from 'react-bootstrap'
//Import a random ID generator
import {v4 as uuidV4} from 'uuid'
//Create and export the functional component 'Login'
export default function Login({onIdSubmit}){
    //Declare and initialize a constant variable 'idRef'
    //'idRef' stands for ID reference
    const idRef = useRef();
    //Create a handler function 'handleSubmit'
    function handleSubmit(e){
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }
    //Create a function 'createNewId'
    function createNewId(){
        onIdSubmit(uuidV4())
    }
    //Return the JSX
    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}> 
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required/>
                </Form.Group>
                <Button type="submit" className="mr-2" style={{margin:'10px'}}>Login</Button>
                <Button onClick={createNewId} variant="secondary">Create a new ID</Button>
            </Form>
        </Container>
    );
}