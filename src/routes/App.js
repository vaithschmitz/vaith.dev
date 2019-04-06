import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Contact from './Contact';
import logo from '../web_logo_VS.png';
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
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
          </a> */}
          <Router>
              <Link to="/contact">Contact</Link>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/contact" component={Contact} exact/>
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
