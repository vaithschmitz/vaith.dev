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

        {/* <form id='ContactForm' onSubmit={(e)=>handleContactForm(e)}>
            <input id='ContactFormName' type='text' placeholder='Your Name'></input>
            <input id='ContactFormEmail' type='email' placeholder='Your Email'></input>
            <input id='ContactFormMsg' type='text' placeholder='Your Message'></input>
            <input id='ContactFormSubmit' type='submit' value='Submit'></input> 
        
        
        </form> */}

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </div>
    )
}

export default Contact
