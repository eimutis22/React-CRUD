import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default App;
