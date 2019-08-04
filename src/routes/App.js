import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../web_logo_VS.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id='App-logo-container'>
          <img src={logo} id='App-logo' alt="logo" />
        </div>
          

      </div>
    );
  }
}

export default App;
