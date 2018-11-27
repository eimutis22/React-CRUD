import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    alert('Submitted!');

    console.log('Username: ' + this.username.value);
    console.log('Password: ' + this.password.value);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input placeholder="Username" ref={input => this.username = input}/> 
          <input placeholder="Password" ref={input => this.password = input}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
