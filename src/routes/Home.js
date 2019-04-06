import React from 'react';
import logo from '../web_logo_VS.png';


const Home = () => {
    return (
        <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <a
              className="Home-link"
              href="https://www.github.com/vaithschmitz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="Home-link"
              href="https://www.twitter.com/realvaith"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            </header>
        </div>
    )
}

export default Home;