import React, {useState, useEffect} from 'react'
import anime from 'animejs'
import './About.css'
import vaith from './media/vaith.png'

export default function About(props){

    useEffect(() => {
        anime({
        targets: '#vaithPic',
        rotate: 360, 
        loop: 5
        })})

    return(
        <div id='AboutContainer'> 
            <p id='About-Intro'>
                Let's not make this all about me. <br/>
                This is about us. <br/>
                This is about who <i>we</i> are, where <i>we</i> are and where <i>we</i> go together.
            </p>

            <img id='vaithPic' src={vaith}></img>

            <p id='About-Section1'>
           bhisdfihfdsi idvihsdfhi  
           sdhisdfhifs <br/>
           jsdfhfs
           isfddfshfsdosdfoubhsdf sdf sdfu odfs osdoh go hdgho gdoh gad
            </p>

        
            <p>



            </p>



        </div>
    )
}