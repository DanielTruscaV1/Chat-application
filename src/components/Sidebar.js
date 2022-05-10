//Import React
import React, { useState } from 'react'
//Import Bootstrap features
import {Tab, Nav, Button, Modal} from 'react-bootstrap'
//Import the functional component 'Conversations'
import Conversations from './Conversations'
//Import the functional component 'Contacts'
import Contacts from './Contacts'
//Import the functional component 'NewConversationModal'
import NewConversationModal from './NewConversationModal'
//Import the functional component 'NewContactsModal'
import NewContactsModal from './NewContactsModal'
const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = "contacts"
//Create and export the functional component 'Sidebar'
export default function Sidebar({id}){
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    function closeModal(){
        setModalOpen(false)
    }
    return (
        <div style={{width:"250px"}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center   ">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations/>
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts/>
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your ID: <span className="text-muted">{id}</span>
                </div>
                <Button onClick={() => setModalOpen(true)} className="rounded-0">
                    New {conversationsOpen ? "Conversation":"Contact"}
                </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ? 
                    <NewConversationModal closeModal={closeModal}/>:
                    <NewContactsModal closeModal={closeModal}/>
                }
            </Modal>
        </div>
    );
}