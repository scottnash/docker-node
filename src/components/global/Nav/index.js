import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/">Hosts</Link></li>
        </ul>
      </div>
    );
  }

}
