import React from 'react';
import './App.css';

import Container from './pages/Container/Container'

function App() {
  return (
    <div className="App">
      <header className="header">
        <span>COVID-19 - BR</span>
      </header>

      <Container />

    <footer className="footer"> 
      by: John Peterson - <a href="https://github.com/thejohnpg" target="_blank"> Github</a> - <a href="https://www.linkedin.com/in/thejohnpg/" target="_blank"> Linkedin</a>
    </footer>

    </div>
  );
}

export default App;
