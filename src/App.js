import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginContainer from './containers/LoginContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <LoginContainer/>
      </div>
    );
  }
}

export default App;
