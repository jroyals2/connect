import React, { Component } from 'react';
import styled from 'styled-components'
import {  Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {

  /* 
  I want to created a toggle for 2 separate home pages. one for logged in and one for not.
  I will use the loggedIn state in order to do this
  */

  state = {
    users: [],
    loggedIn: false,
    newPlayerForm: false,
    redirect: false,
    newUser: {
        name: '',
        password: ''
    }
  }

 async componentWillMount() {
    await this.getUsers()
  }

  getUsers = async () => {
      const res = await axios.get(`/users`)
      console.log(res.data)
      this.setState({users: res.data})
  }

  handleChange = (event) => {
  const attribute = event.target.name
  const newUser = {...this.state.newUser}
  newUser[attribute] = event.target.value
  this.setState({newUser})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
        name: this.state.newUser.name,
        password: this.state.newUser.password
    }
    const emptyForm = {
        name: '',
        password: ''
    }
    await axios.post('/users', payload) 
    this.getUsers()
    this.toggleNewPlayerForm()
    this.setState({newUser: emptyForm})
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
toggleNewPlayerForm = () => {
    this.setState({newPlayerForm: !this.state.newPlayerForm})
}
  render() {
    if (this.state.redirect) {
        return <Redirect to='/game' />
    }
    // this will be the view of the app when you are logged out
    const isLoggedOut = <div>
      <h3>Please select a user to get started for a one player game. If you don't see your user then create a new one!</h3>
      <h3>To start a two player game press the New Two Player Game button!</h3>
      <ul>
        {this.state.users.map((user) => {
          return <li><Link to={`/users/${user.id}`}>{user.name}</Link></li>
        })}
      </ul>
      <button onClick={this.toggleNewPlayerForm}>Create A New User!</button>
      <button onClick={this.toggleRedirect}>New Two Player Game</button>
    </div>
    // this will be the logged in view of the app
    const isLoggedIn = <div>
      <h3>Select a Game or Press New Game to Get Started!</h3>
      <button onClick={this.toggleRedirectOnePlayerGame}>New One Player Game </button>
      <button onClick={this.toggleRedirect}>New Two Player Game</button>
      <button onClick={ () => this.toggleLoggedIn}>Log Out</button>

    </div>

    const newUserForm = <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="name">User Name</label>
                <input name="name" type="text" onChange={this.handleChange} value={this.state.newUser.name}/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="text" onChange={this.handleChange} value={this.state.newUser.password}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    return (

      <div>
        <h1>Welcome to Connect Four!</h1>
        {this.state.loggedIn ? isLoggedIn : isLoggedOut}
        {this.state.newPlayerForm ? newUserForm : ''}
      </div>
    );
  }
}

export default Landing;