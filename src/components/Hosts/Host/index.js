import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default ({ host }) => <ListItem
  href = {`/host/${ host.ontologyId }`}
  leftAvatar = { host.image ? <Avatar src={ host.image.url } /> : null }
  primaryText = { host.name }
/>;
