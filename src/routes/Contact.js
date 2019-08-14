import React from 'react';
import './Contact.css'


const Contact = () => {


    return (  
        <div id='Contact'>

            <form id='ContactForm' name="contact" method="post">
                <label>you are</label><select id='ContactFormType'>
                    <option value="CTO">Tech/CTO/Engineering Manager</option>
                    <option value="hiringman">Client</option>
                    <option value="recruiter">Recruiter</option>
                    <option value="hiringman">Hiring Manager</option>
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
