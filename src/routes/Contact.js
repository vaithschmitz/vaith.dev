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
                <label>you are</label><select id='ContactFormType'>
                    <option value="recruiter">Recruiter</option>
                    <option value="hiringman">Hiring Manager</option>
                    <option value="CTO">CTO / Tech Team</option>
                    <option value="Other">Other</option>
                </select>
                <input type="hidden" name="form-name" value="contact" />
                <label>your name</label><input id='ContactFormName' type="text" name="name"/>
                <label>your email</label><input id='ContactFormEmail' type="email" name="email"/>

                <label>your message</label><textarea id='ContactFormMsg' name="message"></textarea>
                <button id='ContactFormSubmit' type="submit">submit</button>
            </form>

            <div id='ContacLinks'>
                <div id='ContactLinkedin'></div>
                <div id='ContactGithub'></div>
            </div>

        </div>
    )
}

export default Contact
