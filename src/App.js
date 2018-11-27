import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Awesome Title'
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({
      title: 'New Updated Title!'
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div>
          <button onClick={this.onClick}>Click Here</button>
        </div>
        <MyComponent 
          title="Sample title (prop)"
          name="Sample name (prop)"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
