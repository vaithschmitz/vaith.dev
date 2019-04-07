import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import './index.css';
import Contact from './routes/Contact';
import App from './routes/App';
import Projects from './routes/Projects'
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';


const routing = ( 
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/contact" component={Contact} exact />
          <Route path="/projects" component={Projects} exact />
        </Switch>
      </div>
    </Router>
  )




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
