import React, {useState, useEffect} from 'react'
import anime from 'animejs'
import './About.css'
import vaith from './media/vaith.png'

export default function About(props){

    // useEffect(() => {
    //     anime({
    //     targets: '#vaithPic',
    //     opacity: [0, 1],
    //     duration: 2000,
    //     direction: 'alternate',
    //     easing: 'linear',
    //     loop: true
    //     })})

    return(
        <div id='AboutContainer'> 
            <div id='About-Intro'>
                <p id='About-Hey'>Hey</p>
                <div id ='About-Hey-Breakline'></div>
        </div>


            <div id='About-ImageContainer'><img id='vaithPic' src={vaith}></img></div>
        </div>
    )
}