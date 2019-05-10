import React from 'react';
import Output from './Output/Output.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Output/>
        <a
          className="App-link"
          href="https://meiles.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to Hub
        </a>
      </header>
    </div>
  );
}

export default App;
