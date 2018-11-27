import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      renderTitle: true,
      title: 'Awesome Title'
    }
  }

  renderTitle() {
    if (!this.state.renderTitle)
      return null;

    return <h1>{this.state.title}</h1>;
  }

  render() {
    return (
      <div className="App">

        {this.renderTitle()}

      </div>
    );
  }
}

export default App;
