import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from 'Components/HomePage';
import InteriorPage from 'Components/InteriorPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React World!!</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/interior">Interior</Link></li>
          </ul>


          <Switch>
            <Route exact path="/" component={ HomePage }/>
            <Route path='/interior' component={ InteriorPage }/>
          </Switch>
      </div>
    )
  }
}
