import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import github from '../github.png' 
import angel from '../angel.png'
import './Contact.css'


const Contact = () => {
    return (  
        <div id='Contact'>
            <div id='linkedin'>Linkedin</div>
            <div id='github'><img id='githubPic' src={github}></img></div>
            <div id='githubLink'>GITHUB</div>
            <div id='angel'><img id='angelPic' src={angel}></img></div>
            <div id='email'>Email</div>



        </div>
    )
}

export default Contact
