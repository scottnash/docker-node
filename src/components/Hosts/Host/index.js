import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default ({ host, handleClick }) => <ListItem
  onClick = { ()=> handleClick(host.ontologyId) }
  leftAvatar = { host.image ? <Avatar src={ host.image.url } /> : null }
  primaryText = { host.name }
/>;
