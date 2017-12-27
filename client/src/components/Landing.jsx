import React, { Component } from 'react';
import styled from 'styled-components'
import {  Redirect } from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {

  /* 
  I want to created a toggle for 2 separate home pages. one for logged in and one for not.
  I will use the loggedIn state in order to do this
  */

  state = {
    users: [],
    loggedIn: false,
    redirect: false,
    onePlayerGame: false
  }

 async componentWillMount() {
    await this.getUsers()
  }

  getUsers = async () => {
      const res = await axios.get(`/users`)
      console.log(res.data)
      this.setState({users: res.data})
  }

  toggleLoggedIn = () => {
    this.setState({loggedIn : !this.state.loggedIn})
  }
  toggleRedirect = () => {
      this.setState({redirect: !this.state.redirect})
  }
  toggleRedirectOnePlayerGame = () => {
    this.setState({onePlayerGame: !this.state.redirect})
}
  render() {
    if (this.state.redirect) {
        return <Redirect to='/game' />
    }
    if (this.state.onePlayerGame) {
        return <Redirect to='/oneplayergame' />
    }
    // this will be the view of the app when you are logged out
    const isLoggedOut = <div>
      <h3>Please select a user to get started for a one player game. If you don't see your user then create a new one!</h3>
      <h3>To start a two player game press the New Two Player Game button!</h3>
      <ul>
        {this.state.users.map((user) => {
          return <li>{user.name}</li>
        })}
      </ul>
      <button onClick={this.toggleLoggedIn}>Create A New User!</button>
      <button onClick={this.toggleRedirect}>New Two Player Game</button>
    </div>
    // this will be the logged in view of the app
    const isLoggedIn = <div>
      <h3>Select a Game or Press New Game to Get Started!</h3>
      <button onClick={this.toggleRedirectOnePlayerGame}>New One Player Game </button>
      <button onClick={this.toggleRedirect}>New Two Player Game</button>
      <button onClick={ () => this.toggleLoggedIn}>Log Out</button>

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