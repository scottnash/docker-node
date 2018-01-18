import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'Components/HomePage'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React World!!</h1>
        <HomePage />

          <Switch>
            <Route path='/home' component={ HomePage }/>
          </Switch>
      </div>
    )
  }
}
