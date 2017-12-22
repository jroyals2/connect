import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Game from './components/Game.jsx'

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/game" component={Game}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
