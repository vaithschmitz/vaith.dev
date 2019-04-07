import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import './Contact.css'


const Contact = () => {
    return (            
        <div className='maintext'>
            Please Don't Contact Me, I Like To Be Alone.   
            <Link to="/">      
                <Fab variant="extended" color="primary">Home
                </Fab> 
            </Link>
        </div>
    )
}

export default Contact
