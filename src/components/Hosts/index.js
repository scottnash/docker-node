import React, { Component } from 'react';
import { connect } from 'react-redux';
import SNLHosts from 'Redux/SNLHosts';
import Host from './Host';
import styles from './hosts.scss';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


class Hosts extends Component{
  componentDidMount(){
    if(this.props.hosts.length === 0){
      this.props.getHosts();
    }
  }

  render(){
    if(this.props.hosts.length === 0) return null;

    return (
      <div>
        { this.renderHosts() }
      </div>
    );
  }

  renderHosts(){
    return (
      <List>
        { this.props.hosts.map( host => <Host key = { host.ontologyId } host = { host } handleClick={ this.selectHost } /> ) }
      </List>
    )
  }

  selectHost = (hostID)=> {
    this.props.history.push(`/host/${ hostID }`)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getHosts: () => dispatch(SNLHosts.actions.getHosts())
    }
}

const mapStateToProps = (state) => {
  return {
    host: SNLHosts.selectors.host(state),
    hosts: SNLHosts.selectors.hosts(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hosts);
