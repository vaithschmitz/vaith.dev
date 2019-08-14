import React, {useState, useEffect} from 'react'
import './About.css'
import vaith from './media/vaith.png'

export default function About(props){
    const $ = (x) => document.getElementById(x)

    useEffect(() => {
        $('About-Intro').style.transform = 'translateY(0vh)';
        $('About-ImageContainer').style.transform = 'translateY(0vh)';
    })

    return(
        <div id='AboutContainer'> 
            <div id='About-Intro'>
                <p id='About-Hey'>Hey</p>
                <div id ='About-Hey-Text'>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                </div>
            </div>
            <div id='About-ImageContainer'><img id='vaithPic'  src={vaith}></img></div>
            

    

            
        </div>
    )
}