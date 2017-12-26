import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Game from './components/Game.jsx'
import OnePlayerGame from './components/OnePlayerGame.jsx'

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/game" component={Game}/>
          <Route exact path="/oneplayergame" component={OnePlayerGame}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
