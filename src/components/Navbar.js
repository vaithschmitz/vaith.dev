import React from 'react'
import './Navbar.css'

export default function Navbar(props){
    return(
        <div id='Navbar'>
            <div id='Nav-home'>Home</div>
            <div id='Nav-proj'>Projects</div>
            <div id='Nav-about'>About</div>
            <div id='Nav-contact'>Contact</div>
        </div>
    )
}