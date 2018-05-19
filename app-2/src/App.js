import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: ['toyota','honda','mazda','kia']
    }
  }


  render() {
    let carsToDisplay = this.state.cars.map( (element, index) => {
      return (
        <h2 key={ index }>{ element } </h2>
      )
    })
    return (
      <div className="App">
    {carsToDisplay}
    
      </div>
    );
  }
}

export default App;
