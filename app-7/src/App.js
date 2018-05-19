import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import NewTask from './components/NewTask';
import Todo from './components/Todo';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      tasks: ["cleaning", "shopping"],
      task: ''
    }
  }

  
  handleClick = () => {
    let tasksCopy = this.state.tasks
    tasksCopy.push(this.state.task)
    this.setState({tasks: tasksCopy})
  }
  
    render() {
      return (
        <div className="App">
        <NewTask submit={this.handleClick}/>
          <Todo tasks={this.state.tasks}/>
        </div>
      );
    }
  }
  
  export default App;
