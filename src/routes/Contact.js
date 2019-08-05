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

            <form id='ContactForm' name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <input id='ContactFormName' type="text" name="name" placeholder='Your Name'/>
                <input id='ContactFormEmail' type="email" name="email" placeholder='Your Email'/>
                <textarea id='ContactFormMsg' name="message" placeholder='Your Message'></textarea>
                <button id='ContactFormSubmit' type="submit">Send</button>
            </form>

            <div id='ContacLinks'>
                <div id='ContactLinkedin'></div>
                <div id='ContactGithub'></div>
            </div>

        </div>
    )
}

export default Contact
