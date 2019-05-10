import React, { Component } from 'react';
import Output from './Output/Output.js';
import logo from './logo.svg';
import txwes from './TXWES.png';
import './App.css';

class App extends Component {

  state = {

    showObjects: false
  }




toggleObjectHandler = () =>{
  const doesShow = this.state.showObjects;
  this.setState({showObjects: !doesShow});
}


  render() {

    const style = {
backgroundColor: ''

    }



  return (
    <div className="App">
      <header className="App-header">
        <img src={txwes} className="App-logo" alt="logo" />
        <button></button>
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
}

export default App;
