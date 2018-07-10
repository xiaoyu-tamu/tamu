import React from 'react';
import {} from '@material-ui/core';
import { IconButton, Icon } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';

type P = IconButtonProps;

// --------------------------------------------------

const SiderToggler: React.SFC<P> = (props) => (
  <IconButton color="inherit" {...props}>
    <Icon>menu</Icon>
  </IconButton>
);

export default SiderToggler;
