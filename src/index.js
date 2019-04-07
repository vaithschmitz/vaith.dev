import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import './index.css';
import Contact from './routes/Contact';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';


const routing = ( 
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </div>
    </Router>
  )




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
