import React from 'react';
import './Navbutton.css'

export default function Navbutton(props){
    return(
        <div id='Navbutton' className = {props.vert ? 'vert' : null}>{props.text} </div>
    )
}