import React, {useState} from 'react'
import github from '../Github.png'
import linkedin from '../Linkedin.png'
import twitter from '../Twitter.png'
import './Footer.css'

export default function Footer(){
    

    return(
        <div id='FooterContainer'>
            <a id='Footer-linkedin' href='https://www.linkedin.com/in/vaithschmitz/' alt='link to linkedin'><img id='Footer-linkedin-image' src={linkedin}></img></a>
            <a id='Footer-github' href='https://github.com/vaithschmitz' alt='link to github'>><img id='Footer-github-image' src={github}></img></a>
            <a id='Footer-twitter' href='https://twitter.com/realvaith' alt='link to twitter'>><img id='Footer-twitter-image' src={twitter}></img></a>
        </div>
    )
}