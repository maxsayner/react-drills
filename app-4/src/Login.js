import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind( this );

    
  }

  handleUpdateUser(user) {
this.setState({username: user});
  }

  handleUpdatePassword(pass) {
this.setState({password: pass});
  }
  
  handleLogin() {
    alert(`Username ${ this.state.username } Password: ${ this.state.password }`);
  }

  render() {
    return (
       <div className="App">
       <input onChange={ (e) => this.handleUpdateUser(e.target.value)} type = 'text'/>
       <input onChange={ (e) => this.handleUpdatePassword(e.target.value)} type ='text'/>
        <button onClick={ this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;