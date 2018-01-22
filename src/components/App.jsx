import React, { Component } from 'react';
import Hosts from 'Components/Hosts';
import InteriorPage from 'Components/InteriorPage'
import Nav from 'Components/global/Nav';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React World!!</h1>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Hosts } />
          <Route path='/interior' component={ InteriorPage } />
        </Switch>
      </div>
    )
  }
}
