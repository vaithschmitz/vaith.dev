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
          <div className="App-buttons">

            <Link to="/projects">
              <Button 
                id="btn1"
                variant="outlined" color="primary" >Projects
              </Button> 
            </Link>
      
            <Button
              id="btn3" variant="outlined" color="primary"  href="https://www.github.com/vaithschmitz">Github
            </Button>        

            <Button 
              id="btn4" variant="outlined" color="primary"  href="https://www.twitter.com/realvaith">Twitter
            </Button> 
            
            <Link to="/contact">
              <Button
                id="btn2" variant="outlined"  color="secondary" >Contact
              </Button> 
            </Link>

          </div>
        </header>
      </div>
    );
  }
}

export default App;
