import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterString: '',
      motorcycles: [
        "yamaha",
        "mv augusta",
        "aprilia",
        "honda",
        "triumph",
        "ducati",
        "suzuki"

      ],
    }
  }
  
  handleChange( filter ) {
    this.setState({ filterString: filter })
  }

  render() {
    let newBikes = this.state.motorcycles.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />
        { newBikes }
      </div>
    );
  }
}

export default App;
