import React, { Component } from 'react';
import Login from './Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
   <Login/>
      </div>
    );
  }
}


export default App;
