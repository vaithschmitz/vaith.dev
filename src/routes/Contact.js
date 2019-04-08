import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import './Contact.css'


const Contact = () => {
    return (            
        <div className='maintext'>
            Under Construction.   
            <Link to="/">      
                <Fab variant="extended" color="primary">Home
                </Fab> 
            </Link>
        </div>
    )
}

export default Contact
