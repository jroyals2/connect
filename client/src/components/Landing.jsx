import React, { Component } from 'react';
import styled from 'styled-components'
import {  Redirect } from 'react-router-dom'

class Landing extends Component {

  /* 
  I want to created a toggle for 2 separate home pages. one for logged in and one for not.
  I will use the loggedIn state in order to do this
  */

  state = {
    users: ['Player 1', 'James'],
    loggedIn: false
  }

  toggleLoggedIn = () => {
    this.setState({loggedIn : !this.state.loggedIn})
  }

  newGameRedirect = () => {
    <Redirect to={'/game'}/>
  }

  render() {
    // this will be the view of the app when you are logged out
    const isLoggedOut = <div>
      <h3>Please select a user to get started. If you don't see your user then create a new one!</h3>
      <ul>
        {this.state.users.map((user) => {
          return <li>{user}</li>
        })}
      </ul>
      <button onClick={this.toggleLoggedIn}>Create A New User!</button>
    </div>
    // this will be the logged in view of the app
    const isLoggedIn = <div>
      <h3>Select a Game or Press New Game to Get Started!</h3>
      <button onClick={this.newGameRedirect}>New Game</button>
      <button onClick={this.toggleLoggedIn}>Log Out</button>

    </div>
    return (

      <div>
        <h1>Welcome to Connect Four!</h1>
        {this.state.loggedIn ? isLoggedIn : isLoggedOut}
      </div>
    );
  }
}

export default Landing;