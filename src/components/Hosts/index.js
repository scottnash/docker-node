import React, { Component } from 'react';
import { connect } from 'react-redux';
import SNLHosts from 'Redux/SNLHosts';
import Host from './Host';
import styles from './hosts.scss';

class Hosts extends Component{
  componentDidMount(){
    this.props.getHosts();
  }

  render(){
    if(this.props.hosts.length === 0) return null;

    return (
      <div>
        <div>Hosts</div>
        { this.renderHosts() }
      </div>
    );
  }

  renderHosts(){
    return (
      <ol className={ styles.hostsList }>
        { this.props.hosts.map( host => <li key = { host.ontologyId }><Host host = { host } /></li> ) }
      </ol>
    )
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
