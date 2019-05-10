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
      borderRadius: 5,
      backgroundColor: 'blue',
      font: 'inherit',
      border: '3x solid gold',
      padding: '4px'

    };


    let objects = null;

    if (this.state.showObjects) {
      objects = (
        <div>
        {this.state.objects.map((object) => {
            return <Output/>
          }
        )}
        </div>
        );
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={txwes} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Summary</button>
        {objects}
        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Introduction</button>
        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Design and Implementation</button>
        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Testing, Conclusions, and Future Work</button>
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
