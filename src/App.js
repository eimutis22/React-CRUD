import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Initial App Title',
      name: 'Initial Name'
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({
      title: 'New App Title',
      name: 'New Name'
    });
  }

  render() {
    return (
      <div className="App">
        <MyComponent 
          title={this.state.title}
          name={this.state.name}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
