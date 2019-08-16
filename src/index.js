import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import './index.css';
import Contact from './routes/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects'
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';


const routing = ( 
    <Router>
      <div id='mobileView'>
        <div id='mobileRect'></div>
        <div id='mobileTextRight'><p>Please View This Site On A Desktop</p></div>
        <div id='mobileTextDown'><p>Please View This Site On A Desktop</p></div>
        </div>
      <div id='desktopView'>
        <Route component={Navbar}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/projects" component={Projects} exact />
        </Switch>
        <Route component={Footer}/>
      </div>
    </Router>
  )




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
