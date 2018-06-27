import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoStore: new Store(),
    }
  }

  handleClick() {
    const toDoStore = this.state.toDoStore;
    toDoStore.addToDo("Be proud ");
    this.setState({
      toDoStore: toDoStore
    })
  }

  render() {
    const toDoStore = this.state.toDoStore;

    const tasks = toDoStore.todos.map((todo, index) => {
      return (
        <li key={index}>{todo}</li>
      );
    })

    return (
      <div className="App">
        <br/>
        <button onClick={() => this.handleClick()}>Add Task</button>
        <p className="App-intro">
          {tasks}
        </p>
      </div>
    );
  }
}

export default App;
