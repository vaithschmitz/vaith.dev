import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import logo from '../web_logo_VS.png';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div id="Home">
        <div id='Home-logo-container'>
          <img src={logo} id='Home-logo' alt="logo" />
        </div>
        <div id='homeText'>
          <p>Literally the most boring page, click on something up there.</p>
        </div>


      </div>
    );
  }
}

export default Home;
