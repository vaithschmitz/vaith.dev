import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Contact.css'


const Contact = () => {
    return (  
        <div className="Contact-header">
            <div className='Contact-btns'>
                <Button id='btn1' variant="outlined" color="primary" href="https://angel.co/vaith-schmitz">AngelList</Button>

                <Button id='btn2' variant="outlined" color="primary"  href="https://linkedin.com/in/vaithschmitz">LinkedIn</Button>

                <Link to="/">      
                    <Button id='btn3' variant="outlined" color="secondary">Home
                    </Button> 
                </Link>
            </div>
        </div>
    )
}

export default Contact
