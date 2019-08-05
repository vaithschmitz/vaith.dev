import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import github from '../github.png' 
import angel from '../angel.png'
import './Contact.css'


const Contact = () => {

    const handleContactForm = (e) =>{
        e.preventDefault()
        console.log(e.target)
    }

    return (  
        <div id='Contact'>

        <form id='ContactForm' method='POST' data-netlify='true'>
            <input id='ContactFormName' type='text' name='name' placeholder='Your Name'></input>
            <input id='ContactFormEmail' type='email' name='email' placeholder='Your Email'></input>
            <input id='ContactFormMsg' type='text' name='message' placeholder='Your Message'></input>
            <input id='ContactFormSubmit' type='submit' value='Submit'></input> 
        
        
        </form>


        </div>
    )
}

export default Contact
