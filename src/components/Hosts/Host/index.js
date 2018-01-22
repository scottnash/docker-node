import React from 'react';
import { Link } from 'react-router-dom';

export default ({ host, handleClick }) => <Link to={`/host/${ host.ontologyId }`} label={ host.name }>{ host.name }</Link>;
