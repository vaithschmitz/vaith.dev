import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Contact.css'


const Contact = () => {
    return (            
        <div className='maintext'>
            <div className='button'>
                <Button variant="contained" color="primary" href="https://angel.co/vaith-schmitz">AngelList</Button>
            </div>
            <div className='button'>
                <Button variant="contained" color="primary" href="https://linkedin.com/in/vaithschmitz">LinkedIn</Button>
            </div>
            <div className='button'>
                <Link to="/">      
                    <Button variant="contained" color="secondary">Home
                    </Button> 
                </Link>
            </div>
        </div>
    )
}

export default Contact
