import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Image myImage={"http://www.fz09.org/forum/attachments/122001d1508166584-any-news-2018-yamaha-850-mt-09-street-rally-2016-700px.jpg"}/>
      </div>
    );
  }
}

export default App;
