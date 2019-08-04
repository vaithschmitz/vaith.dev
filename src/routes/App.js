import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbutton from '../components/Navbutton'
import Navbar from '../components/Navbar'
import logo from '../web_logo_VS.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="App">
        <div id='Navbar'><Navbar></Navbar></div>
        <div id='App-logo-container'>
          <img src={logo} id='App-logo' alt="logo" />
        </div>
        <div id='homeText'>
          <p>Literally the most boring page, click on something up there.</p>
        </div>


      </div>
    );
  }
}

export default App;
