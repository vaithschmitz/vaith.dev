import React, {useState, useEffect} from 'react'
import './About.css'
import vaith from './media/vaith.png'

export default function About(props){
    const $ = (x) => document.getElementById(x)

    useEffect(() => {
        $('About-Left').style.transform = 'translateY(0vh)';
        $('About-Right-Text').style.transform = 'translateY(0vh)';
        $('About-Bottom').style.transform = 'translateY(0vh)';
    })

    return(
        <div id='AboutContainer'> 
            <div id='About-Left'>
                <div id ='About-Hey-Text'>
                    <p>I'm Vaith</p>
                    <p>I like building things and learning stuff.</p>
                    <p>I also like food. But that's not why you're here.</p>
                    <p>Once upon a time I was a management consultant.</p>
                    <p>And a few other things.</p>
                    <p>But now I make computers do what I want.</p>
                </div>
            </div>
            <div id='About-Right'>
                <div id ='About-Right-Text'>
                    <p>Engineering is pretty sweet, not gonna lie.</p>
                    <p>Playing around with lots of different things and making everything from websites to chatbots to hardware enabled home automation is crazy awesome.</p>
                    <p>I'm a firm believer in not limiting yourself to one language or framework, that being said, I currently get lots of enjoyment out of web-based stuff (Javascript, Node, React), embedded stuff (Arduino, Raspberry, C) and more peculiar things like snips. Python is super cool too and I should use it more.</p>
                </div>
            </div>

            <div id='About-Bottom'>
                {/* <div id='About-ImageContainer'><img id='vaithPic'  src={vaith}></img></div> */}
                <div id ='About-Bottom-Text'>
                    <p>Wanna know more?</p>
                    <p>Hit me up through the links below or on the contact form and I'll get back to you.</p>
                </div>
            </div>
            
        </div>
    )
}