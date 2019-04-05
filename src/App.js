import React, { Component } from 'react';
import panda from './panda.jpg';
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
            href="https://www.latlmes.com/arts/return-of-the-golden-age-of-comics-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Me
          </a>
        </header>
      </div>
    );
  }
}

export default App;
