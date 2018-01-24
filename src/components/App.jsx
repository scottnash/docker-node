import React, { Component } from 'react';
import Hosts from 'Components/Hosts';
import HostDetail from 'Components/HostDetail'
import { Switch, Route } from 'react-router-dom';
import styles from './global.scss';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title={ <Link className={ styles.headerLink } to="/"><span>Saturday Night Live Hosts</span></Link> }
          iconElementLeft={ <Link className={ styles.headerLink } to="/"><IconButton iconStyle={ { color: 'white', } }><ActionHome /></IconButton></Link>}
        />

        <Switch>
          <Route exact path="/" component={ Hosts } />
          <Route path='/host/:hostID' component={ HostDetail } />
        </Switch>
      </div>
    )
  }
}
