import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes";
import Nav from "./Components/Nav";

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="">
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </header>
      <div className="footer">
        <footer className="footer"> 
          John Peterson 
          <a href="https://github.com/thejohnpg" target="_blank"> 
            <GoMarkGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thejohnpg/" target="_blank"> 
          <FaLinkedin size={20} />
          </a>
        </footer>
        </div>
    </div>
    
  );
}

export default App;
