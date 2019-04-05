import React, { Component } from 'react';
import logo from './web_logo_VS.png';
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
            Github
          </a>
          <a
            className="App-link"
            href="https://www.twitter.com/realvaith"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </header>
      </div>
    );
  }
}

export default App;
