import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbutton from '../components/Navbutton'
import logo from '../web_logo_VS.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id='App-logo-container'>
          <img src={logo} id='App-logo' alt="logo" />
        </div>
        <div id='btn-top'><Navbutton text={'PROJECTS'} ></Navbutton></div>
        
        <div id='btn-right'><Navbutton text={'GITHUB'} vert={true}></Navbutton></div>
        <div id='btn-btm'><Navbutton text={'CONTACT'} ></Navbutton></div>
        <div id='btn-left'><Navbutton text={'LINKEDIN'} vert={true}></Navbutton></div>

        

      </div>
    );
  }
}

export default App;
