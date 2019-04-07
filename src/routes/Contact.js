import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Contact.css'


const Contact = () => {
    return (            
        <div className='maintext'>
        <Link to="/">
            <Button variant="contained" color="primary">Home
            </Button> 
        </Link>
            Please Don't Contact Me, I Like To Be Alone.   
        </div>
    )
}

export default Contact
