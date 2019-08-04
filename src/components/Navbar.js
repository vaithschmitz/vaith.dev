import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar(props){
    return(
        <div id='Navbar'>
            <Link to='/' id='Nav-home'>Home</Link>
            <Link to='/projects/' id='Nav-proj'>Projects</Link>
            <Link to='/about/' id='Nav-about'>About</Link>
            <Link to='/contact/' id='Nav-contact'>Contact</Link>
        </div>
    )
}