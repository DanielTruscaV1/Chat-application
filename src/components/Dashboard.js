//Import React
import React from 'react'
//Import the functional component 'Sidebar'
import Sidebar from './Sidebar';
//Create and export the functional component 'Dashboard'
export default function Dashboard({id}){
    return (
        <div className="d-flex" style={{height:'100vh'}}>
            <Sidebar id={id}/>
        </div>
    );
}