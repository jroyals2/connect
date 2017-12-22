import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

class App extends Component {

  /* 
  I want to created a toggle for 2 separate home pages. one for logged in and one for not.
  I will use this state in order to do this
  */

  state = {
    users: ['Player 1', 'James'],
    loggedIn: false
  }

  toggleLoggedIn = () => {
    this.setState({loggedIn : !this.state.loggedIn})
  }
  render() {
    // this will be the state of the website when you are logged out
    const isLoggedOut = <div>
      <h3>Please select a user to get started. If you don't see your user then create a new one!</h3>
      <ul>
        {this.state.users.map((user) => {
          return <li>{user}</li>
        })}
      </ul>
      <button onClick={this.toggleLoggedIn}>Create A New User!</button>
    </div>

    const isLoggedIn = <div>
      <h3>Select a Game or Press New Game to Get Started!</h3>
      <button onClick={this.toggleLoggedIn}>New Game</button>

    </div>
    return (
      <div>
        <h1>Welcome to Connect Four!</h1>
        {this.state.loggedIn ? isLoggedIn : isLoggedOut}
      </div>
    );
  }
}

export default App;
