import React, { Component } from 'react';
import Hosts from 'Components/Hosts';
import HostDetail from 'Components/HostDetail'
import Nav from 'Components/global/Nav';
import { Switch, Route } from 'react-router-dom';
import styles from './global.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Example React Site</h1>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Hosts } />
          <Route path='/host/:hostID' component={ HostDetail } />
        </Switch>
      </div>
    )
  }
}
