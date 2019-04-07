import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import logo from '../web_logo_VS.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.github.com/vaithschmitz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">Github
            </Button>        
          </a>
          <a
            className="App-link"
            href="https://www.twitter.com/realvaith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">Twitter
            </Button> 
          </a>
          <Link to="/projects">
            <Button variant="contained" color="primary">Projects
            </Button> 
          </Link>
          <Link to="/contact">
            <Button variant="contained" color="primary">Contact
            </Button> 
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
