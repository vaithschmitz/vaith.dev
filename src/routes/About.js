import React, {useState, useEffect} from 'react'
import './About.css'
import vaith from './media/vaith.png'

export default function About(props){
    const $ = (x) => document.getElementById(x)

    useEffect(() => {
        $('About-Left').style.transform = 'translateY(0vh)';
        $('About-ImageContainer').style.transform = 'translateX(0vw)';
        $('About-Right-Text').style.transform = 'translateY(0vh)';
    })

    return(
        <div id='AboutContainer'> 
            <div id='About-Left'>
                <p id='About-Hey'>Hey</p>
                <div id ='About-Hey-Text'>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                </div>
            </div>
            <div id='About-Right'></div>
                <div id='About-ImageContainer'><img id='vaithPic'  src={vaith}></img>
                <div id ='About-Right-Text'>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                    <p>TextTextTextTextTextTextTextTextText</p>
                </div>
            </div>
            

    

            
        </div>
    )
}