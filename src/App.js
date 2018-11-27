import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onClick() {
    alert('Clicked');
  }

  render() {
    const list = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];

    return (
      <div className="App">
        <h1>
          {
            list.map(item => {
              return(
                <div onClick={this.onClick}>{item}</div>
              );
            })
          }
        </h1>
      </div>
    );
  }
}

export default App;