import React, { Component } from 'react';
import { connect } from 'react-redux';
import SNLHosts from 'Redux/SNLHosts';
import Details from './Details';

class HostDetail extends Component{
  componentDidMount(){

    if(this.props.hosts.length === 0){
      this.props.getHosts().then ( ()=> this.props.setHost(this.findHost(this.props.match.params.hostID, this.props.hosts) ) );
    } else {
      this.props.setHost(this.findHost(this.props.match.params.hostID, this.props.hosts));
    }
  }

  render(){
    const { host } = this.props;

    if(Object.keys(host).length === 0) return null;

    return (
      <div>
        <Details host = { host } />
      </div>
    );
  }

  findHost = (hostID, hosts) => hosts.find( host => host.ontologyId == hostID );
}

const mapDispatchToProps = (dispatch) => {
    return {
      setHost: (host) => dispatch(SNLHosts.actions.setHost(host)),
      getHosts: () => dispatch(SNLHosts.actions.getHosts()),
    }
}

const mapStateToProps = (state) => {
  return {
    host: SNLHosts.selectors.host(state),
    hosts: SNLHosts.selectors.hosts(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostDetail);
