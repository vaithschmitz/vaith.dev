import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import logo from '../web_logo_VS.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-buttons">
          <Link to="/projects">
            <Button 
              id="btn1"
              variant="contained" color="primary" style={{maxWidth: '100px', minWidth: '100px'}}>Projects
            </Button> 
          </Link>
          <Link to="/contact">
            <Button
              id="btn2" variant="contained" color="primary" style={{maxWidth: '100px', minWidth: '100px'}}>Contact
            </Button> 
          </Link>
          <a
            className="App-link"
            href="https://www.github.com/vaithschmitz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              id="btn3" variant="contained" color="primary" style={{maxWidth: '100px', minWidth: '100px'}}>Github
            </Button>        
          </a>
          <a
            className="App-link"
            href="https://www.twitter.com/realvaith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              id="btn4" variant="contained" color="primary" style={{maxWidth: '100px', minWidth: '100px'}}>Twitter
            </Button> 
          </a>
        </div>


{/* 
<div className="App-buttons">
          <Link to="/projects">
            <Fab 
              id="btn1"
              variant="extended" color="primary">Projects
            </Fab> 
          </Link>
          <Link to="/contact">
            <Fab
              id="btn2" variant="extended" color="primary" >Contact
            </Fab> 
          </Link>
          <a
            className="App-link"
            href="https://www.github.com/vaithschmitz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fab
              id="btn3" variant="extended" color="primary" fullWidth="true">My Github
            </Fab>        
          </a>
          <a
            className="App-link"
            href="https://www.twitter.com/realvaith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fab 
              id="btn4" variant="extended" color="primary" fullWidth="true">Twitter
            </Fab> 
          </a>
          </div> */}
        </header>
      </div>
    );
  }
}

export default App;
