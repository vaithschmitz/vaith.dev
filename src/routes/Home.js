import React, { Component, useState, useEffect } from 'react';
import logo from '../web_logo_VS.png';
import './Home.css';


export default function Home () {
  
    
    const [boringWord, setBoringWord] = useState('lame')
    const boringWordList = ['dull','humdrum','lifeless','monotonous','mundane','stale','stodgy','stuffy','stupid','tame','tedious','tiresome','tiring','trite','uninteresting', 'boring', 'lame', 'meh', 'uhm', 'buzzkill']

    // setBoringWord(boringWordList[Math.floor(Math.random()* boringWordList.length)]
    const switchWord =()=>{
      setBoringWord(boringWordList[Math.floor(Math.random()* boringWordList.length)])
    }
    setTimeout(switchWord, 1000)

    return (
      <div id="Home">
        <div id='Home-logo-container'>
          <img src={logo} id='Home-logo' alt="logo" />
        </div>
        <div id='homeText'>
          <p>Literally the most {boringWord} page, click on something up there.</p>
        </div>


      </div>
    );

}



