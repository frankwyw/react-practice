import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";
import NameForm from "./NameForm";
import Calculator from "./Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js + {test()}</code> and save to reload.
            <List/>

            <NameForm/>

            <Calculator />
        </p>
      </div>
    );
  }
}

function test() {
    return 1 + 1;
}

export default App;
