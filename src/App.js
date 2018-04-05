import React, { Component } from 'react';
import logo from './animals_logo.svg';
import './App.css';
import GeneralTextDiv from './Components/generalTextDiv.js';
import MainBody from './Components/MainBody.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="appHeader">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HabitatDB</h1>
        </header>
        <div className="mainBody">
        <MainBody/>
        </div>
      </div>
    );
  }
}

export default App;
