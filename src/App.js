import React, { Component } from 'react';
import Output from './Output/Output.js';
import Introduction from './Output/Introduction.js';
import Design from './Output/DesignImplementation.js';
import Conclusion from './Output/Conclusion.js'
import logo from './logo.svg';
import txwes from './TXWES.png';
import './App.css';

class App extends Component {

  state = {

    showObjects: false
  }




toggleObjectsHandler = () => {
  const doesShow = this.state.showObjects;
  this.setState({showObjects: !doesShow});
}


  render() {

    const style = {
      borderRadius: 5,
      backgroundColor: 'blue',
      font: 'inherit',
      fontColor: 'yellow',
      border: '3x solid yellow',
      padding: '4px'

    };




  return (
    <div className="App">
      <header className="App-header">
        <img src={txwes} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>

        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Summary</button> { 
          this.state.showObjects === true ? 
          <div>
        <Output/>
          </div> : null
        }

        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Introduction</button> { 
          this.state.showObjects === true ? 
          <div>
        <Introduction/>
          </div> : null
        }

        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Design and Implementation</button> { 
          this.state.showObjects === true ? 
          <div>
        <Design/>
          </div> : null
        }

        <button
        style={style} 
        onClick={this.toggleObjectsHandler}>Testing, Conclusions, and Future Work</button> { 
          this.state.showObjects === true ? 
          <div>
        <Conclusion/>
          </div> : null
        }



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
